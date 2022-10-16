const { contactsModel } = require("../../models");

const listContacts = async (req, res, next) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 5, ...query } = req.query;
    const skip = (page - 1) * limit;
    const result = await contactsModel.Contact.find({ owner, ...query }, "-createdAt -updatedAt", { skip, limit })
                            .populate("owner", "email");
    
    res.json(result);
}

module.exports = listContacts;
/*
find(); - all
find({}); - all
find({}, "name email"); - all by fields: id, name, email
find({}, "-name -email"); -all by fields: id, phone, favorite - (except name, email)
find({ owner, ...query }, "name email"); - all by filter on fields: "owner" and "query" from URL 

find({ owner, ...query }, "name email", { skip, limit }); - "skip" = miss amount of "limit" of view, "limit" = amount of view by page

example:
const { page = 3, limit = 5} = req.query; // page = 3: third page, limit = 5: view 5 items on page.
const skip = (page - 1) * limit; // values of formula (3 - 1) * 5 = 2 * 5 = 10, miss 10 items
find({ owner, ...query }, "name email", { skip, limit }); // start view by 11 of item 
*/