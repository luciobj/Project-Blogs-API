const userCreate = require('../services/user/userCreate');
const userLogin = require('../services/user/userLogin');
const usersList = require('../services/user/usersList');
const userById = require('../services/user/userById');
const userDeleteCurrent = require('../services/user/userDeleteCurrent');
const { created, success, noContent } = require('../utils/dictionary/statusCode');

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
    request.headers.authorization = token;
    // request.userId = x;
    return resolve.status(success).json({ token });
  } catch (error) {
    console.log('POST LOGIN USER: ', error);
    return next(error);
  }
};

const usersListController = async (_request, resolve, next) => {
  try {
    const result = await usersList();
    return resolve.status(success).json(result);
  } catch (error) {
    console.log('GET ALL USERS: ', error);
    return next(error);
  }
};

const userByIdController = async (request, resolve, next) => {
  try {
    const { id } = request.params;
    const user = await userById(id);
    return resolve.status(success).json(user);
  } catch (error) {
    console.log('GET USER BY ID: ', error);
    return next(error);
  }
};

const userDeleteController = async (request, resolve, next) => {
  try {
    const token = request.authorization;
    await userDeleteCurrent(token);
    request.authorization = '';
    return resolve.status(noContent).json();
  } catch (error) {
    console.log('DELETE CURRENT USER: ', error);
    return next(error);
  }
};

module.exports = {
  userCreateController,
  userLoginController,
  usersListController,
  userByIdController,
  userDeleteController,
};
