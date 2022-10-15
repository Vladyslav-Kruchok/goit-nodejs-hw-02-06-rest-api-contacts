const { contactsModel } = require("../../models");

const addContact = async (req, res, next) => {
    const { _id: owner } = req.user;
    const updatedContacts = await contactsModel.Contact.create({...req.body, owner});
    console.log(updatedContacts);
    res.status(201).json(updatedContacts);
};

module.exports = addContact;