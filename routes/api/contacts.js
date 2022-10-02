const express = require('express');
const Joi = require('joi');
const {requestError} = require("../../helpers");
const router = express.Router();
const {  
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact
} = require('../../models/contacts.js');

const validateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
});

router.get('/', async (req, res, next) => {
  try {
    const result = await listContacts();
    res.json(result);
  } 
  catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const сontactById = await getContactById(id);
    
    if (!сontactById) {
      throw requestError(404);
    };
    
    res.json(сontactById);
  } 
  catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {error} = validateSchema.validate(req.body);
    if (error) {
      requestError(400, "missing required name field")
    };
    const updatedContacts = await addContact(req.body);
    res.status(201).json(updatedContacts);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const сontactById = await removeContact(id);
    if (!сontactById) {
      throw requestError(404);
    };
    
    res.json({
      message: "contact deleted"
    });
  } 
  catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const {error} = validateSchema.validate(req.body);
    if(error) {
      throw RequestError(400, "missing fields");
    };

    const {id} = req.params;
    const updatedContacts = await updateContact(id, req.body);
    if(!updatedContacts) {
      throw RequestError(404);
    };
    res.json(updatedContacts);
  } 
  catch (error) {
    next(error);
  }
});

module.exports = router;