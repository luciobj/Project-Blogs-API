const jwt = require('jsonwebtoken');
const { unauthorized, notFound } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');
const { User, BlogPost } = require('../models');

const userValidate = async (request, _resolve, next) => {
  const token = request.headers.authorization;
  const { id } = request.params;
  try {
    const { data: { email } } = jwt.verify(token, process.env.JWT_SECRET);
    const { id: userId } = await User.findOne({ where: { email } });
    const post = await BlogPost.findOne({ where: { id } });
    if (!post) {
      next(errorConstructor(notFound, 'Post does not exist'));
    }
    const { userId: postUserId } = post;
    if (userId !== postUserId) {
      next(errorConstructor(unauthorized, 'Unauthorized user'));
    }
    next();
  } catch (error) {
    console.log('USER VALIDATION: ', error);
    next(errorConstructor(unauthorized, 'Expired or invalid token'));
  }
};

module.exports = userValidate;
