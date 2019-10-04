const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/contact.controller');
const { authorize } = require('../../middlewares/auth');
const {
  listContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
} = require('../../validations/contact.validation');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/contacts List Contacts
   * @apiDescription Get a list of contacts
   * @apiSampleRequest http://localhost:3000/v1/contacts/
   * @apiVersion 1.0.0
   * @apiName ListContacts
   * @apiGroup Contact
   *
   * @apiHeader {String} Authorization   Contact's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Contacts per page
   * @apiParam  {String}             [name]       Contact's name
   * @apiParam  {String}             [email]      Contact's email
   *
   * @apiSuccess {Object[]} contacts List of contacts.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated contacts can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(authorize(), validate(listContacts), controller.list)
  /**
   * @api {post} v1/contact Create Contact
   * @apiDescription Create a new contact
   * @apiSampleRequest http://localhost:3000/v1/contacts/
   * @apiVersion 1.0.0
   * @apiName CreateContact
   * @apiGroup Contact
   *
   * @apiHeader {String} Authorization   Contact's access token
   *
   * @apiParam  {String}             email     Contact's email
   * @apiParam  {String{6..128}}     password  Contact's password
   * @apiParam  {String{..128}}      [name]    Contact's name
   * @apiParam  {String=contact,admin}  [role]    Contact's role
   *
   * @apiSuccess (Created 201) {String}  id         Contact's id
   * @apiSuccess (Created 201) {String}  name       Contact's name
   * @apiSuccess (Created 201) {String}  email      Contact's email
   * @apiSuccess (Created 201) {String}  role       Contact's role
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated contacts can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(), validate(createContact), controller.create);

router
  .route('/:contactId')
  
  .get(authorize(), validate(getContact), controller.get)
  /**
   * @api {patch} v1/contacts/:id Update Contact
   * @apiDescription Update some fields of a contact document
   * @apiSampleRequest http://localhost:3000/v1/contacts/:contactId
   * @apiVersion 1.0.0
   * @apiName UpdateContact
   * @apiGroup Contact
   *
   * @apiHeader {String} Authorization   Contact's access token
   *
   * @apiParam  {String}             email     Contact's email
   * @apiParam  {String{6..128}}     password  Contact's password
   * @apiParam  {String{..128}}      [name]    Contact's name
   * @apiParam  {String=contact,admin}  [role]    Contact's role
   *
   * @apiSuccess {String}  id         Contact's id
   * @apiSuccess {String}  name       Contact's name
   * @apiSuccess {String}  email      Contact's email
   * @apiSuccess {String}  role       Contact's role
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated contacts can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only contact with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Contact does not exist
   */
  .patch(authorize(), validate(updateContact), controller.update)
  
  /**
   * @api {delete} v1/contacts/:id Delete Contact
   * @apiDescription Delete a contact
   * @apiSampleRequest http://localhost:3000/v1/contacts/
   * @apiVersion 1.0.0
   * @apiName DeleteContact
   * @apiGroup Contact
   *
   * @apiHeader {String} Authorization   Contact's access token
   *
   * @apiSuccess (No Content 204)  Successfully deleted
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated contacts can delete the data
   * @apiError (Forbidden 403)    Forbidden     Only contact with same id or admins can delete the data
   * @apiError (Not Found 404)    NotFound      Contact does not exist
   */
  .delete(authorize(), validate(deleteContact), controller.remove);

module.exports = router;
