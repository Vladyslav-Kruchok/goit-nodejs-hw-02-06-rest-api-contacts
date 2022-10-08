const { Contact } = require("../models/contacts");
const { requestError } = require("../helpers");

const updateContactFavorite = async (req, res, next) => {
    const { id } = req.params;
    const updatedContacts = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if(!updatedContacts) {
        throw requestError(404);
    };
    res.json(updatedContacts);
};

module.exports = updateContactFavorite;