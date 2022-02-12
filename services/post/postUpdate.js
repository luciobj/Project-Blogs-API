const { BlogPost, Category } = require('../../models');
const postUpdateValidate = require('./postUpdateValidate');

const postUpdate = async (post, id) => {
  await postUpdateValidate(post);
  const { title, content } = post;
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedPost = await BlogPost
    .findOne({
      where: { id },
      include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
      attributes: { exclude: ['UserId', 'id', 'published', 'updated'] } });
  return updatedPost;
};

module.exports = postUpdate;
