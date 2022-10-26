const { authModel } = require("../../models")
const { requestError, sendEmail, createVerifyEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => { 
    const { email } = req.body;
    const registerUser = await authModel.User.findOne({ email });
    if (!registerUser) {
        throw requestError(400, "Verification has already been passed");
    }
    const mail = createVerifyEmail(email, registerUser.verificationToken);
    await sendEmail(mail);
    res.json({
        message: "Verification email sent"
    });
};

module.exports = resendVerifyEmail;