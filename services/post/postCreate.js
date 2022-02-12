const { BlogPost } = require('../../models');
const postCrateValidate = require('./postCreateValidate');

const postCreate = async (post, userId) => {
  await postCrateValidate(post);
  const { title, content, categoryIds } = post;
  const result = await BlogPost.create({ title, content, userId });
  await result.addCategory(categoryIds);
  return result;
};

module.exports = postCreate;
