const jwt = require('jsonwebtoken');
const { unauthorized } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');
const { User, BlogPost } = require('../models');

const userValidate = async (request, _resolve, next) => {
  const token = request.headers.authorization;
  const { id } = request.params;
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = data;
    const { id: userId } = await User.findOne({ where: { email } });
    const { userId: postUserId } = await BlogPost.findOne({ where: id, userId });
    if (userId !== postUserId) {
      next(errorConstructor(unauthorized, 'Unauthorized user'));
    }
    next();
  } catch (error) {
    console.log('TOKEN VALIDATION: ', error);
    next(errorConstructor(unauthorized, 'Expired or invalid token'));
  }
};

module.exports = userValidate;
