const { isValidObjectId } = require("mongoose");
const { requestError } = require("../helpers");

const isValidId = (req, res, next) => { 
    const { id } = req.params;
    const result = isValidObjectId(id);

    if (!result) {
        next(requestError(404, `${id} is not valid id`));
    }
    next();
};

module.exports = isValidId;