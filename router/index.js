const express = require('express');
const {
  userCreateController,
  userLoginController,
  usersListController,
  userByIdController,
  userDeleteController,
} = require('../controllers/userControllers');
const {
  categoryCreateController,
  categoriesListController,
} = require('../controllers/categoryControllers');
const {
  postCreateController,
  postsListController,
  postByIdController,
  postUpdateController,
  postDeleteController,
  postSearchListController,
} = require('../controllers/postControllers');
const tokenValidate = require('../middlewares/tokenValidate');
const userValidate = require('../middlewares/userValidate');

const router = express.Router();

router.post('/user', userCreateController);
router.post('/login', userLoginController);
router.get('/user', tokenValidate, usersListController);
router.get('/user/:id', tokenValidate, userByIdController);
router.post('/categories', tokenValidate, categoryCreateController);
router.get('/categories', tokenValidate, categoriesListController);
router.post('/post', tokenValidate, postCreateController);
router.get('/post', tokenValidate, postsListController);
router.get('/post/:id', tokenValidate, postByIdController);
router.put('/post/:id', tokenValidate, userValidate, postUpdateController);
router.delete('/post/:id', tokenValidate, userValidate, postDeleteController);
router.delete('/user/me', tokenValidate, userDeleteController);
router.get('/post/search', tokenValidate, postSearchListController);

module.exports = router;
