const { Contact } = require("../models/contacts");
const { requestError } = require("../helpers");

const getContactById = async (req, res, next) => {
    
    const {id} = req.params;
    const сontactById = await Contact.findById(id);
    
    if (!сontactById) {
        throw requestError(404);
    };
    
    res.json(сontactById);
};

module.exports = getContactById;

/*
findById - by id - val=id
findOne - by any - val={name: "Alex"}
*/