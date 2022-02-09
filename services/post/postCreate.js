const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User, BlogPost } = require('../../models');
// const PostsCategoryCreate = require('./PostsCategoryCreate');
const postValidate = require('./postValidate');

const postCreate = async (post, token) => {
  await postValidate(post);
  const { data } = jwt.verify(token, process.env.JWT_SECRET);
  const { email } = data;
  const { id: userId } = await User.findOne({ where: { email } });
  const { title, content } = post;
  const result = await BlogPost.create({ title, content, userId });
  // const { id: postId } = result;
  // await PostsCategoryCreate(categoryIds, postId);
  return result;
};

module.exports = postCreate;
