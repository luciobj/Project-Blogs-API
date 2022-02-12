const postCreate = require('../services/post/postCreate');
const postsList = require('../services/post/postsList');
// const postListAlter = require('../services/post/postListAlter');
const postById = require('../services/post/postById');
const postUpdate = require('../services/post/postUpdate');
const postDeleteById = require('../services/post/postDeleteById');
const postByQuery = require('../services/post/postByQuery');
const { created, success, noContent } = require('../utils/dictionary/statusCode');

const postCreateController = async (request, resolve, next) => {
  try {
    const post = request.body;
    const { userId } = request;
    const result = await postCreate(post, userId);
    return resolve.status(created).json(result);
  } catch (error) {
    console.log('POST CREATE BLOGPOST: ', error);
    return next(error);
  }
};

const postsListController = async (_request, resolve, next) => {
  try {
    const blogPosts = await postsList();
    // const result = await postListAlter(blogPosts);
    return resolve.status(success).json(blogPosts);
  } catch (error) {
    console.log('GET ALL POST: ', error);
    return next(error);
  }
};

const postByIdController = async (request, resolve, next) => {
  try {
    const { id } = request.params;
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

const postDeleteController = async (request, resolve, next) => {
  try {
    const { id } = request.params;
    await postDeleteById(id);
    return resolve.status(noContent).json();
  } catch (error) {
    console.log('DELETE POST BY ID: ', error);
    return next(error);
  }
};

const postSearchListController = async (request, resolve, next) => {
  try {
    const searchQuery = request.queryParam;
    const searchResult = await postByQuery(searchQuery);
    return resolve.status(success).json(searchResult);
  } catch (error) {
    console.log('GET POST BY SEARCH: ', error);
    return next(error);
  }
};

module.exports = {
  postCreateController,
  postsListController,
  postByIdController,
  postUpdateController,
  postDeleteController,
  postSearchListController,
};
