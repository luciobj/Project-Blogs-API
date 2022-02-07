const userCreate = require('../services/userCreate');
const { created } = require('../utils/dictionary/statusCode');

const userCreateController = async (request, resolve, next) => {
  try {
    const user = request.body;
    const token = await userCreate(user);
    request.authorization = token;
    return resolve.status(created).json(token);
  } catch (error) {
    console.log('POST CREATE USER: ', error);
    return next(error);
  }
};

module.exports = {
  userCreateController,
};
