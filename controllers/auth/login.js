const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { authModel } = require("../../models");
const { requestError } = require("../../helpers");

const login = async (req, res) => { 
    const { SECRET_KEY } = process.env;
    const { email, password } = req.body;
    const registerUser = await authModel.User.findOne({ email });
    
    if (!registerUser) {
        throw (requestError(401, "email not found"));
    };
    
    const passwordCompare = await bcrypt.compare(password, registerUser.password);
    if (!passwordCompare) {
        throw (requestError(401, "password is wrong"));
    };
    
    const payload = {
        id: registerUser._id
    };
    //SECRET_KEY from .env, {expiresIn: "1h"} it is lifecycle of token one hour, can be more or less
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    await authModel.User.findByIdAndUpdate(registerUser._id, {token})
    
    res.json({
        token
    });
};

module.exports = login;