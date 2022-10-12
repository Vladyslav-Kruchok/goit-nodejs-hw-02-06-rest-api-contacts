const bcrypt = require("bcryptjs");
const { authModel } = require("../../models");
const { requestError } = require("../../helpers");

const login = async (req, res) => { 
    const { email, password } = req.body;
    const registerUser = await authModel.User.findOne({ email });
    if (!registerUser) {
        throw (requestError(401, "email not found"));
    };
    const passwordCompare = await bcrypt.compare(password, registerUser.password);
    if (!passwordCompare) {
        throw (requestError(401, "password is wrong"));
    }
    const token = "token";

    res.json({
        token
    });
};

module.exports = login;