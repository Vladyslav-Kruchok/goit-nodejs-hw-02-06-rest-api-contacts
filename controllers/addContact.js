const contacts = require('../models/contacts.js');

const addContact = async (req, res, next) => {
    const updatedContacts = await contacts.addContact(req.body);
    res.status(201).json(updatedContacts);
};

module.exports = addContact;