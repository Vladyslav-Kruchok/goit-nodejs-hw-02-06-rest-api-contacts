const jwt = require("jsonwebtoken");
const fs = require("fs/promises");
const path = require("path");

const { requestError, checkToken, resizeAvatar } = require("../../helpers");
const { authModel } = require("../../models");
const { pathDirAvatarsDestination, pathDirAvatarDb } = require("../../config");

const updateAvatars = async (req, res) => { 
    const { originalname, path: sourceTemp } = req.file;
    const { SECRET_KEY } = process.env;
    const token = checkToken(req.headers);
    const { id } = jwt.verify(token, SECRET_KEY);
    
    //save new avatar with new name in new dir
    const ext = originalname.split(".").pop();
    const newFilemame = `${id}.${ext}`;
    const fullPathDestination = path.join(pathDirAvatarsDestination, newFilemame);
    const avatarURL = path.join(pathDirAvatarDb, newFilemame);
    
    try {
        await resizeAvatar(sourceTemp, fullPathDestination);
        await fs.unlink(sourceTemp);
    } catch (error) {
        throw error;
    }

    //update user data
    const updatedUser = await authModel
        .User
        .findByIdAndUpdate(id, {...req.body, avatarURL}, {new: true});
    if (!updatedUser) {
        throw requestError(404);
    };

    res.json({avatarURL: avatarURL});
};

module.exports = updateAvatars;