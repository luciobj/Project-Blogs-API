const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../../models');

const postByQuery = async (query) => {
  const dbList = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: query } },
        { content: { [Op.substring]: query } },
      ],
    }, 
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } }],
    });
  return dbList;
};

module.exports = postByQuery;
