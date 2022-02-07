const express = require('express');
const {
  userCreateController,
// } = require('../controllers/userControllers');
} = require('../controllers/userControllers');
// const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/user', userCreateController);

module.exports = router;
