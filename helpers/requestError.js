const messages = {
    400: "Bad Request",
    401: "Unauthorize",
    403: "Forbbiden",
    404: "Not found",
    409: "Conflict"
};
const requestError = (status, message = message[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
};
module.exports = requestError;