const { userSchema } = require('../../utils/dictionary/schemas');
const { User } = require('../../models');
const errorConstructor = require('../../utils/functions/errorConstructor');
const { conflict, badRequest } = require('../../utils/dictionary/statusCode');

const userValidate = async (user) => {
  const { error } = userSchema.validate(user);
  const { email } = user;
  if (!error) {
    const foundUser = await User.findOne({ where: { email } });
    // console.log(foundUser);
    if (!foundUser) {
      return true;
    }
    const message = 'User already registered';
    throw errorConstructor(conflict, message);
  }
  throw errorConstructor(badRequest, error.message);
};

module.exports = userValidate;
