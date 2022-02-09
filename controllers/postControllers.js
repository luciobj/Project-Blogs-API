const postCreate = require('../services/post/postCreate');
// const postList = require('../services/post/postList');
const { created } = require('../utils/dictionary/statusCode');

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

// const postsListController = async (_request, resolve, next) => {
//   try {
//     const result = await postList();
//     return resolve.status(success).json(result);
//   } catch (error) {
//     console.log('GET ALL POST: ', error);
//     return next(error);
//   }
// };

module.exports = {
  postCreateController,
  // postsListController,
};
