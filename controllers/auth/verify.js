const { authModel } = require("../../models")
const { requestError } = require("../../helpers");

const verify = async (req, res) => { 
    const { verificationToken } = req.params;
    const registerUser = await authModel.User.findOne({ verificationToken });
    if (!registerUser) {
        throw requestError(404)
    }
    await authModel.User.findByIdAndUpdate(registerUser._id, { verify: true, verificationToken: "" });

    res.json({
        message: "Verification successful"
    });
};

module.exports = verify;