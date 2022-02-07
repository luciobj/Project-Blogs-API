const express = require('express');
const {
  userCreateController,
  userLoginController,
  userListController,
} = require('../controllers/userControllers');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/user', userCreateController);
router.post('/login', userLoginController);
router.get('/user', tokenValidate, userListController);

module.exports = router;
