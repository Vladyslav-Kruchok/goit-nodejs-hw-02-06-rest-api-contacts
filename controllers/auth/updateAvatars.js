const jwt = require("jsonwebtoken");
const fs = require("fs/promises");
const path = require("path");

const { requestError, checkToken } = require("../../helpers");
const { authModel } = require("../../models");
const {
    pathDirAvatarsDestination,
    pathDirAvatarDb
} = require("../../config");

const updateAvatars = async (req, res) => { 
    const { originalname, path: sourceTemp } = req.file;
    const { SECRET_KEY } = process.env;
    const token = checkToken(req.headers);
    const { id } = jwt.verify(token, SECRET_KEY);

    //new avatar
    const fullPathDestination = path.join(pathDirAvatarsDestination, originalname);
    const avatarURL = path.join(pathDirAvatarDb, originalname);
    
    fs.rename(sourceTemp, fullPathDestination);

    //update user data
    const updatedUser = await authModel
        .User
        .findByIdAndUpdate(id, {...req.body, avatarURL}, {new: true});
    
    if (!updatedUser) {
        throw requestError(404);
    };

    res.json(updatedUser);
};

module.exports = updateAvatars;