const contacts = require('../models/contacts.js');

const getContactById = async (req, res, next) => {
    
    const {id} = req.params;
    const сontactById = await contacts.getContactById(id);
    
    if (!сontactById) {
        throw requestError(404);
    };
    
    res.json(сontactById);
};

module.exports = getContactById;