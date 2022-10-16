const jwt = require("jsonwebtoken");
const { requestError } = require("../../helpers");
const { authModel } = require("../../models");

const updateSubscription = async (req, res) => {
    const { SECRET_KEY } = process.env;

    const { authorization = "" } = req.headers;
    const [bearer = "", token = ""] = authorization.split(" ");

    if (bearer !== "Bearer") {
        throw requestError(401);
    };

    const { id } = jwt.verify(token, SECRET_KEY);
    const updatedUser = await authModel
                                .User
                                .findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedUser) {
        throw requestError(404);
    };

    res.json(updatedUser);
};

module.exports = updateSubscription;