const { BlogPost, User, Category } = require('../../models');

const postsList = async () => {
  const dbList = await BlogPost.findAll({
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
    attributes: { exclude: ['UserId'] },
  });
  return dbList;
};

module.exports = postsList;
