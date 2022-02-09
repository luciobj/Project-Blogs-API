const { BlogPost } = require('../../models');
const { notFound } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');
const postUpdateValidate = require('./postUpdateValidate');

const postUpdate = async (post, id) => {
  await postUpdateValidate(post);
  const { title, content } = post;
  const updatedPost = await BlogPost.updateOne(
    { title, content },
    { where: id },
  );
  if (!updatedPost) {
    throw errorConstructor(notFound, 'Post not found');
  }
  return updatedPost;
};

module.exports = postUpdate;
