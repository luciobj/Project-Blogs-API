const { BlogPost } = require('../../models');

const postsById = async (id) => {
  const selectedPost = await BlogPost.findByPk({
    where: { id },
    include: [
      { model: 'User', as: 'user', through: { attributes: [] } },
      { model: 'Category', as: 'categories', through: { attributes: [] } }],
    });
  return selectedPost;
};

module.exports = postsById;
