const { tokenGenerator } = require('../../middlewares/tokenGenerator');
const loginValidate = require('./loginValidate');

const userCreate = async (user) => {
  await loginValidate(user);
  return tokenGenerator(user);
};

module.exports = userCreate;
