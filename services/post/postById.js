const { BlogPost, User, Category } = require('../../models');
const { notFound } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');

const postsById = async (id) => {
  const selectedPost = await BlogPost.findOne({
    where: { id },
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
  if (!selectedPost) {
    throw errorConstructor(notFound, 'Post does not exist');
  }
  return selectedPost;
};

module.exports = postsById;
