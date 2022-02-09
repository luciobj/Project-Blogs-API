const { postUpdateSchema } = require('../../utils/dictionary/schemas');
const errorConstructor = require('../../utils/functions/errorConstructor');
const { badRequest } = require('../../utils/dictionary/statusCode');

const postValidate = async (post) => {
  if (post.categoryIds) {
    throw errorConstructor(badRequest, 'Categories cannot be edited');
  }
  const { error } = postUpdateSchema.validate(post);
  if (!error) {
    return true;
  }
  throw errorConstructor(badRequest, error.message);
};

module.exports = postValidate;
