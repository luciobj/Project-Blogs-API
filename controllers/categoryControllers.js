const categoryCreate = require('../services/category/categoryCreate');
const categoryList = require('../services/category/categoriesList');
const { created, success } = require('../utils/dictionary/statusCode');

const categoryCreateController = async (request, resolve, next) => {
  try {
    const category = request.body;
    const result = await categoryCreate(category);
    return resolve.status(created).json(result);
  } catch (error) {
    console.log('POST CREATE CATEGORY: ', error);
    return next(error);
  }
};

const categoriesListController = async (_request, resolve, next) => {
  try {
    const result = await categoryList();
    return resolve.status(success).json(result);
  } catch (error) {
    console.log('GET ALL CATEGORIES: ', error);
    return next(error);
  }
};

module.exports = {
  categoryCreateController,
  categoriesListController,
};
