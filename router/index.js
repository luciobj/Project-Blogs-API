const express = require('express');
const {
  userCreateController,
  userLoginController,
  usersListController,
  userByIdController,
} = require('../controllers/userControllers');
const {
  categoryCreateController,
  categoriesListController,
} = require('../controllers/categoryControllers');
const {
  postCreateController,
  postsListController,
  postsByIdController,
} = require('../controllers/postControllers');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/user', userCreateController);
router.post('/login', userLoginController);
router.get('/user', tokenValidate, usersListController);
router.get('/user/:id', tokenValidate, userByIdController);
router.post('/categories', tokenValidate, categoryCreateController);
router.get('/categories', tokenValidate, categoriesListController);
router.post('/post', tokenValidate, postCreateController);
router.get('/post', tokenValidate, postsListController);
router.get('/post/:id', tokenValidate, postsByIdController);

module.exports = router;
