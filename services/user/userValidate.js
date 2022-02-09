const { userSchema } = require('../../utils/dictionary/schemas');
const { User } = require('../../models');
const errorConstructor = require('../../utils/functions/errorConstructor');
const { conflict, badRequest } = require('../../utils/dictionary/statusCode');

const userValidate = async (user) => {
  const { error } = userSchema.validate(user);
  const { email } = user;
  if (!error) {
    const foundUser = await User.findOne({ where: { email } });
    if (!foundUser) {
      return true;
    }
    throw errorConstructor(conflict, 'User already registered');
  }
  throw errorConstructor(badRequest, error.message);
};

module.exports = userValidate;
