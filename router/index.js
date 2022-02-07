const express = require('express');
const {
  userCreateController,
  userLoginController,
  userListController,
  userByIdController,
} = require('../controllers/userControllers');
const {
  categoryCreateController,
} = require('../controllers/categoryControllers');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/user', userCreateController);
router.post('/login', userLoginController);
router.get('/user', tokenValidate, userListController);
router.get('/user/:id', tokenValidate, userByIdController);
router.post('/categories', tokenValidate, categoryCreateController);

module.exports = router;
