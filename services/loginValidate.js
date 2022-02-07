const { loginSchema } = require('../utils/dictionary/schemas');
const { User } = require('../models');
const errorConstructor = require('../utils/functions/errorConstructor');
const { badRequest } = require('../utils/dictionary/statusCode');

const loginValidate = async (user) => {
  const { error } = loginSchema.validate(user);
  const { email, password } = user;
  if (!error) {
    const foundUser = await User.findOne({ where: { email, password } });
    if (foundUser) {
      return true;
    }
    const message = 'Invalid fields';
    throw errorConstructor(badRequest, message);
  }
  throw errorConstructor(badRequest, error.message);
};

module.exports = loginValidate;
