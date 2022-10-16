const { authModel } = require("../../models");

const logout = async (req, res) => { 
    const { _id } = req.user;
    await authModel.User.findByIdAndUpdate(_id, { token: "" });

    res.status(204);
};

module.exports = logout;