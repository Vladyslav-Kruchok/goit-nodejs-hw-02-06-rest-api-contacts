const {RequestError} = require("../helpers");

const validateBody = (schema) => {
    const func = (req, res, next) => {
        const body = req.body;
        const { error } = schema.validate(body);
        if (error) {
            next(RequestError(400, "missing required name field"));
        };
        next();
    };
    return func;
};

module.exports = validateBody;