const { Category } = require('../../models');

const categoriesCheck = async (categoryIdsArray) => {
  // const result = Promise.all(categoryIdsArray.every(async (categoryId) => {
  //   const foundCategory = await Category.findOne({ where: { id: categoryId } });
  //   if (!foundCategory) {
  //     return false;
  //   }
  //   return true;
  // }));
  // return result;
  const existingCategories = await Category.findAll({ where: { id: categoryIdsArray } });
  if (existingCategories.length !== categoryIdsArray.length) {
    return false;
  }
  return true;
};

module.exports = categoriesCheck;
