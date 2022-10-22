const jwt = require("jsonwebtoken");
const { requestError, checkToken } = require("../../helpers");
const { authModel } = require("../../models");

const updateSubscription = async (req, res) => {
    const { SECRET_KEY } = process.env;

    const token = checkToken(req.headers);
    
    const { id } = jwt.verify(token, SECRET_KEY);
    const updatedUser = await authModel
        .User
        .findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedUser) {
        throw requestError(404);
    };

    res.json(updatedUser);
};

module.exports = updateSubscription;