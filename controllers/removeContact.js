const contacts = require('../models/contacts.js');

const removeContact = async (req, res, next) => {
    const {id} = req.params;
    const сontactById = await contacts.removeContact(id);
    if (!сontactById) {
        throw requestError(404);
    };

    res.json({
        message: "contact deleted"
    });
};

module.exports = removeContact;