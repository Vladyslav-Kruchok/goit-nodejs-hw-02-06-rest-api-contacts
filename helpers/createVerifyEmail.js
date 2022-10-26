const createVerifyEmail = (email, verificationToken) => {
    const { BASE_URL } = process.env; 
    const mail = {
        to: email,
        subject: "Підтвердження реєстрації",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Натісніть для підтвердження</a>`
    };
    return mail;
};

module.exports = createVerifyEmail;