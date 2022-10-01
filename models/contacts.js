//const {nanoid} = require("nanoid");
const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  console.log(contactId);
  const contacts = await listContacts();
  const contactIdStr = String(contactId);
  const currContactById = contacts.find(
      item => item.id === contactIdStr
  );
  return currContactById || null;
};

const removeContact = async (contactId) => {
  //TODO
};

const addContact = async (body) => {
  //TODO
};

const updateContact = async (contactId, body) => {
  //TODO
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
