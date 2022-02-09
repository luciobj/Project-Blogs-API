const { BlogPost } = require('../../models');
const { notFound } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');

const postsById = async (id) => {
  const selectedPost = await BlogPost.findByPk({
    where: { id },
    include: [
      { model: 'User', as: 'user', through: { attributes: [] } },
      { model: 'Category', as: 'categories', through: { attributes: [] } }],
    });
  if (!selectedPost) {
    throw errorConstructor(notFound, 'Post does not exist');
  }
  return selectedPost;
};

module.exports = postsById;
