const userCreate = require('../services/userCreate');
const userLogin = require('../services/userLogin');
const userList = require('../services/userList');
const { created, success } = require('../utils/dictionary/statusCode');

const userCreateController = async (request, resolve, next) => {
  try {
    const user = request.body;
    const token = await userCreate(user);
    return resolve.status(created).json(token);
  } catch (error) {
    console.log('POST CREATE USER: ', error);
    return next(error);
  }
};

const userLoginController = async (request, resolve, next) => {
  try {
    const user = request.body;
    const token = await userLogin(user);
    request.authorization = token;
    return resolve.status(success).json({ token });
  } catch (error) {
    console.log('POST LOGIN USER: ', error);
    return next(error);
  }
};

const userListController = async (_request, resolve, next) => {
  try {
    const result = await userList();
    return resolve.status(success).json(result);
  } catch (error) {
    console.log('GET ALL USERS: ', error);
    return next(error);
  }
};

module.exports = {
  userCreateController,
  userLoginController,
  userListController,
};
