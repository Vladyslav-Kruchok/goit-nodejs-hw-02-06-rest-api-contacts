const express = require('express');
const router = express.Router();
const {  
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact
} = require('../../models/contacts.js');


router.get('/', async (req, res, next) => {
  const result = await listContacts();
  res.json(result);
});

router.get('/:contactId', async (req, res, next) => {
  const {contactId} = req.params;
  const сontactsById = await getContactById(contactId);
  res.json(сontactsById);
});

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
