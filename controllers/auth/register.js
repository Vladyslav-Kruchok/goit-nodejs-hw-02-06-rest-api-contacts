const bcrypt = require("bcryptjs");
const { authModel } = require("../../models");
const { requestError } = require("../../helpers");

const register = async (req, res) => { 
    const { name, email, password } = req.body;
    const user = await authModel.User.findOne({ email });
    if (user) {
        throw (requestError(409, "email in use"));
    };
    //10 - level of a random data that add into hash of Password. can be more or less
    const hashPass = await bcrypt.hash(password, 10);
    const registerUser = await authModel.User.create({ name, email, password: hashPass });
    res.status(201).json({
        name: registerUser.name,
        email: registerUser.email
    });
};

module.exports = register;