const contacts = require('../models/contacts.js');

const updateContact = async (req, res, next) => {
    const {id} = req.params;
    const updatedContacts = await contacts.updateContact(id, req.body);
    if(!updatedContacts) {
        throw RequestError(404);
    };
    res.json(updatedContacts);
};

module.exports = updateContact;