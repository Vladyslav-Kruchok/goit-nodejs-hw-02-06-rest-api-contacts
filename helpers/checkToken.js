
const checkToken = ({ authorization = "" }) => { 
    const [bearer = "", token = ""] = authorization.split(" ");

    if (bearer !== "Bearer") {
        throw requestError(401);
    };

    return token;
};

module.exports = checkToken;