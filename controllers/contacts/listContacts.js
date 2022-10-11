const { models } = require("../../models");

const listContacts = async (_, res, next) => {
    const result = await models.Contact.find();
    res.json(result);
}

module.exports = listContacts;
/*
find() - all
find({}) - all
find({}, "name email") - id, name, email
find({}, "-name -email") - id, phone, favorite - (except name, email)
*/