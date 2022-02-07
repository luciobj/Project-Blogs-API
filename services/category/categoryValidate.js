const errorConstructor = require('../../utils/functions/errorConstructor');
const { badRequest } = require('../../utils/dictionary/statusCode');

const categoryValidate = async (category) => {
  if (category.name && category.name !== '') {
    return true;
  }
  throw errorConstructor(badRequest, '"name" is required');
};

module.exports = categoryValidate;
