const { BlogPost } = require('../../models');
const { notFound } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');

const postDeleteById = async (id) => {
  const selectedPost = await BlogPost.deleteOne({ where: { id } });
  if (!selectedPost) {
    throw errorConstructor(notFound, 'Post does not exist');
  }
};

module.exports = postDeleteById;
