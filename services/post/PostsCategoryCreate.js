const { PostsCategory } = require('../../models');

const PostsCategoryCreate = async (categoryIds, postId) => {
  Promise.all(categoryIds
    .forEach(async (categoryId) => { await PostsCategory.create({ postId, categoryId }); }));
};

module.exports = PostsCategoryCreate;
