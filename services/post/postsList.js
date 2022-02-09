const { BlogPost } = require('../../models');

const postsList = async () => {
  const dbList = await BlogPost.findAll({
    include: [
      { model: 'User', as: 'user', through: { attributes: [] } },
      { model: 'Category', as: 'categories', through: { attributes: [] } }],
    });
  return dbList;
};

module.exports = postsList;
