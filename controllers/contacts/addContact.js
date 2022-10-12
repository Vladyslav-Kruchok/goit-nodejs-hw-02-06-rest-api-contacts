const { contactsModel } = require("../../models");

const addContact = async (req, res, next) => {
    const updatedContacts = await contactsModel.Contact.create(req.body);
    res.status(201).json(updatedContacts);
};

module.exports = addContact;