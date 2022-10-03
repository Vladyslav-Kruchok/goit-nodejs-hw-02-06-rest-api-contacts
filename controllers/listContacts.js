const contacts = require('../models/contacts.js');

const listContacts = async (_, res, next) => {
    const result = await contacts.listContacts();
    res.json(result);
}

module.exports = listContacts;