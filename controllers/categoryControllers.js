const categoryCreate = require('../services/category/categoryCreate');
const { created } = require('../utils/dictionary/statusCode');

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

module.exports = {
  categoryCreateController,
};
