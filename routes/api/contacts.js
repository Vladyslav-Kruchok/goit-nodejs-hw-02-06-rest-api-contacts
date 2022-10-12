const express = require("express");
const contactsRouter = express.Router();
const ctrl = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");
const {validateBody, isValidId} = require("../../middlewares");

const { contactsModel } = require("../../models");

contactsRouter.get('/', ctrlWrapper(ctrl.contacts.listContacts));

contactsRouter.get('/:id', isValidId, ctrlWrapper(ctrl.contacts.getContactById));

contactsRouter.post('/',validateBody(contactsModel.schemas.validateSchema), ctrlWrapper(ctrl.contacts.addContact));

contactsRouter.delete('/:id', isValidId, ctrlWrapper(ctrl.contacts.removeContact));

contactsRouter.put('/:id', isValidId, validateBody(contactsModel.schemas.validateSchema), ctrlWrapper(ctrl.contacts.updateContact));

contactsRouter.patch('/:id/favorite', isValidId, validateBody(contactsModel.schemas.validateSchemaFavorite), ctrlWrapper(ctrl.contacts.updateContactFavorite));

module.exports = contactsRouter;