const bcrypt = require("bcryptjs");
const { authModel } = require("../../models");
const { requestError } = require("../../helpers");

const register = async (req, res) => { 
    const { email, password } = req.body;
    const userDb = await authModel.User.findOne({ email });
    if (userDb) {
        throw (requestError(409, "email in use"));
    };
    //10 - level of a random data that add into hash of Password. can be more or less
    const hashPass = await bcrypt.hash(password, 10);
    const registerUser = await authModel.User.create({ email, password: hashPass });
    
    res.status(201).json({
        user: {
            email: registerUser.email,
            subscription: registerUser.subscription
        }
    });
};

module.exports = register;