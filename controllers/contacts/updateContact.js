const { Contact } = require("../../models");
const { requestError } = require("../../helpers");

const updateContact = async (req, res, next) => {
    const {id} = req.params;
    const updatedContacts = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if(!updatedContacts) {
        throw requestError(404);
    };
    res.json(updatedContacts);
};

module.exports = updateContact;