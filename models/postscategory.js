module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    postId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
  });
  return PostsCategory;
};
