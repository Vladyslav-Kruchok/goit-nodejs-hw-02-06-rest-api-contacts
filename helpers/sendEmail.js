const sendGrdMail = require("@sendgrid/mail");

const sendEmail = async(data) => { 
    const { SENDGRID_API_KEY } = process.env;
    sendGrdMail.setApiKey(SENDGRID_API_KEY);

    const mail = { ...data, from: "vladyslavw@gmail.com" };
    const res = await sendGrdMail.send(mail);
    return true;
};
module.exports = sendEmail;