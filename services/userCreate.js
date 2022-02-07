const { tokenGenerator } = require('../middlewares/tokenGenerator');
const { User } = require('../models');
const validateUser = require('./userValidate');

const userCreate = async (user) => {
  await validateUser(user);
  await User.create(user);
  return tokenGenerator(user);
};

module.exports = userCreate;
