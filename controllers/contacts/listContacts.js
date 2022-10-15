const { contactsModel } = require("../../models");

const listContacts = async (req, res, next) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 5, ...query } = req.query;
    const skip = (page - 1) * limit;
    const result = await contactsModel.Contact.find({owner, ...query}, "-createdAt -updatedAt", {skip, limit});
    
    res.json(result);
}

module.exports = listContacts;
/*
find() - all
find({}) - all
find({}, "name email") - id, name, email
find({}, "-name -email") - id, phone, favorite - (except name, email)
*/