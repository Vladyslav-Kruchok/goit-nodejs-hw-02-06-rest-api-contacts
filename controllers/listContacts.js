const { Contact } = require("../models/contacts");

const listContacts = async (_, res, next) => {
    const result = await Contact.find();
    res.json(result);
}

module.exports = listContacts;
/*
find() - all
find({}) - all
find({}, "name email") - id, name, email
find({}, "-name -email") - id, phone, favorite - (except name, email)
*/