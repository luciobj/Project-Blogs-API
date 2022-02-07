const { Category } = require('../../models');

const categoryList = async () => {
  const dbList = await Category.findAll();
  return dbList;
};

module.exports = categoryList;
