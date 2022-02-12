require('dotenv').config();
const { BlogPost } = require('../../models');
const postCrateValidate = require('./postCreateValidate');

const postCreate = async (post, userId) => {
  await postCrateValidate(post);
  const { title, content } = post;
  const result = await BlogPost.create({ title, content, userId });
  return result;
};

module.exports = postCreate;
