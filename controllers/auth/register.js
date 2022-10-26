const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");


const { authModel } = require("../../models");
const { requestError, sendEmail, createVerifyEmail } = require("../../helpers");

const register = async (req, res) => {
    const { email, password } = req.body;
    const userDb = await authModel.User.findOne({ email });
    if (userDb) {
        throw (requestError(409, "email in use"));
    };
    //10 - level of a random data that add into hash of Password. can be more or less
    const hashPass = await bcrypt.hash(password, 10);
    //create random avatar by npm gravatar
    const avatarURL = gravatar.url(email);
    //verification email
    const verificationToken = nanoid();
    const registerUser = await authModel.User.create({ email, password: hashPass, avatarURL, verificationToken });
    const mail = createVerifyEmail(email, verificationToken);
    const result = await sendEmail(mail);
    console.log(result);

    res.status(201).json({
        user: {
            email: registerUser.email,
            subscription: registerUser.subscription,
            verificationToken: registerUser.verificationToken
        }
    });
};

module.exports = register;