const express = require("express");
const contactsRouter = express.Router();
const ctrl = require("../../controllers");

const {ctrlWrapper} = require("../../helpers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { contactsModel } = require("../../models");

contactsRouter.get('/', authenticate, ctrlWrapper(ctrl.contacts.listContacts));

contactsRouter.get('/:id', authenticate, isValidId, ctrlWrapper(ctrl.contacts.getContactById));

contactsRouter.post('/', authenticate, validateBody(contactsModel.schemas.validateSchema), ctrlWrapper(ctrl.contacts.addContact));

contactsRouter.delete('/:id', authenticate, isValidId, ctrlWrapper(ctrl.contacts.removeContact));

contactsRouter.put('/:id', authenticate, isValidId, validateBody(contactsModel.schemas.validateSchema), ctrlWrapper(ctrl.contacts.updateContact));

contactsRouter.patch('/:id/favorite', authenticate, isValidId, validateBody(contactsModel.schemas.validateSchemaFavorite), ctrlWrapper(ctrl.contacts.updateContactFavorite));

module.exports = contactsRouter;