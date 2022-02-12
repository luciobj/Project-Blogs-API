const { postCreateSchema } = require('../../utils/dictionary/schemas');
const errorConstructor = require('../../utils/functions/errorConstructor');
const { badRequest } = require('../../utils/dictionary/statusCode');
const categoriesCheck = require('./categoriesCheck');

const postValidate = async (post) => {
  const { error } = postCreateSchema.validate(post);
  const { categoryIds } = post;
  if (!error && categoryIds && categoryIds !== []) {
    const check = await categoriesCheck(categoryIds);
    if (!check) {
      throw errorConstructor(badRequest, '"categoryIds" not found');
    }
    return true;
  }
  throw errorConstructor(badRequest, error.message);
};

module.exports = postValidate;
