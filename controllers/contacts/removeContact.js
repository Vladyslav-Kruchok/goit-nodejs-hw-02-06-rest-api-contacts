const { Contact } = require("../../models");
const { requestError } = require("../../helpers");

const removeContact = async (req, res, next) => {
    const {id} = req.params;
    const сontactById = await Contact.findByIdAndDelete(id);

    if (!сontactById) {
        throw requestError(404);
    };

    res.json({
        message: "contact deleted"
    });
};

module.exports = removeContact;