const postCreate = require('../services/post/postCreate');
const postsList = require('../services/post/postsList');
const postById = require('../services/post/postById');
const { created, success } = require('../utils/dictionary/statusCode');

const postCreateController = async (request, resolve, next) => {
  try {
    const post = request.body;
    const token = request.authorization;
    const result = await postCreate(post, token);
    return resolve.status(created).json(result);
  } catch (error) {
    console.log('POST CREATE BLOGPOST: ', error);
    return next(error);
  }
};

const postsListController = async (_request, resolve, next) => {
  try {
    const result = await postsList();
    return resolve.status(success).json(result);
  } catch (error) {
    console.log('GET ALL POST: ', error);
    return next(error);
  }
};

const postsByIdController = async (request, resolve, next) => {
  try {
    const { id } = request.paramsl;
    const selectedPost = await postById(id);
    return resolve.status(success).json(selectedPost);
  } catch (error) {
    console.log('GET POST BY ID: ', error);
    return next(error);
  }
};

module.exports = {
  postCreateController,
  postsListController,
  postsByIdController,
};
