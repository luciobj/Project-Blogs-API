const { BlogPost } = require('../../models');

const postDeleteById = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = postDeleteById;
