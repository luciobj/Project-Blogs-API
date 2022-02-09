const { Category } = require('../../models');

const categoriesCheck = async (categoryIdsArray) => {
  const result = Promise.all(categoryIdsArray.every(async (categoryId) => {
    const foundCategory = await Category.findOne({ where: { id: categoryId } });
    if (!foundCategory) {
      return false;
    }
    return true;
  }));
  return result;
};

module.exports = categoriesCheck;
