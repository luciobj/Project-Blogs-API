const { postCreateSchema } = require('../../utils/dictionary/schemas');
const errorConstructor = require('../../utils/functions/errorConstructor');
const { conflict, badRequest } = require('../../utils/dictionary/statusCode');
const categoriesCheck = require('./categoriesCheck');

const postValidate = async (post) => {
  const { error } = postCreateSchema.validate(post);
  const { categoryIds } = post;
  if (!error && categoryIds && categoryIds !== []) {
    const check = categoriesCheck(categoryIds);
    if (!check) {
      throw errorConstructor(conflict, '"categoryIds" not found');
    }
    return true;
  }
  throw errorConstructor(badRequest, error.message);
};

module.exports = postValidate;
