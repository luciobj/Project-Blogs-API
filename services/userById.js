const { User } = require('../models');
const { notFound } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');

const userById = async (id) => {
  const foundUser = await User.findByPk(id);
  if (!foundUser) {
    throw errorConstructor(notFound, 'User does not exist');
  }
  return foundUser;
};

module.exports = userById;
