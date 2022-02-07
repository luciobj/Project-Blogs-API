const express = require('express');
const {
  userCreateController,
  userLoginController,
} = require('../controllers/userControllers');
// const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/user', userCreateController);
router.post('/login', userLoginController);

module.exports = router;
