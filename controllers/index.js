const listContacts = require("./contacts/listContacts");
const getContactById = require("./contacts/getContactById");
const addContact = require("./contacts/addContact");
const removeContact = require("./contacts/removeContact");
const updateContact = require("./contacts/updateContact");
const updateContactFavorite = require("./contacts/updateContactFavorite");

module.exports = {
    contacts:
    {
        listContacts,
        getContactById,
        addContact,
        removeContact,
        updateContact,
        updateContactFavorite
    }
};