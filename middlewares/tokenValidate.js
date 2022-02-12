const jwt = require('jsonwebtoken');
const { unauthorized, badRequest } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');
const { User } = require('../models');

const tokenValidate = async (request, _resolve, next) => {
  const token = request.headers.authorization;
  if (!token || token === null) {
    console.log('TOKEN VALIDATION: Token not found');
    next(errorConstructor(unauthorized, 'Token not found'));
  }
  try {
    const { data: { email } } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('TOKEN VALIDATION: user not found');
      next(errorConstructor(badRequest, 'Expired or invalid token'));
    }
    request.userId = user.dataValues.id;
    next();
  } catch (error) {
    console.log('TOKEN VALIDATION: ', error);
    next(errorConstructor(unauthorized, 'Expired or invalid token'));
  }
};

module.exports = tokenValidate;
