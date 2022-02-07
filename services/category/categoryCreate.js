const { Category } = require('../../models');
const categoryValidate = require('./categoryValidate');

const categoryCreate = async (category) => {
  await categoryValidate(category);
  const result = await Category.create(category);
  return result;
};

module.exports = categoryCreate;
