const {requestError} = require("../helpers");

const validateBody = (schema) => {
    const func = (req, res, next) => {
        const body = req.body;
        const field = req.url.split('/')[req.url.split('/').length - 1];
        const message = (!field) ? "missing required field(s)" : `missing required field => ${field}`;
        const { error } = schema.validate(body);
        if (error) {
            next(requestError(400, message));
        };
        next();
    };
    return func;
};

module.exports = validateBody;