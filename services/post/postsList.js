const { BlogPost, User, Category } = require('../../models');

const postsList = async () => {
  const dbList = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', through: { attributes: [] } },
      { model: Category, as: 'category', through: { attributes: [] } }],
    });
  return dbList;
};

module.exports = postsList;
