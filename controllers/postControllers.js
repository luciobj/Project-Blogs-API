const postCreate = require('../services/post/postCreate');
const postsList = require('../services/post/postsList');
const postById = require('../services/post/postById');
const postUpdate = require('../services/post/postUpdate');
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

const postByIdController = async (request, resolve, next) => {
  try {
    const { id } = request.paramsl;
    const selectedPost = await postById(id);
    return resolve.status(success).json(selectedPost);
  } catch (error) {
    console.log('GET POST BY ID: ', error);
    return next(error);
  }
};

const postUpdateController = async (request, resolve, next) => {
  try {
    const post = request.body;
    const { id } = request.params;
    const updatedPost = await postUpdate(post, id);
    return resolve.status(success).json(updatedPost);
  } catch (error) {
    console.log('PUT UPDATE BLOGPOST: ', error);
    return next(error);
  }
};

module.exports = {
  postCreateController,
  postsListController,
  postByIdController,
  postUpdateController,
};
