module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define("PostCategories", {
    postId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
  });
  PostCategories.associate = (models) => {
    PostCategories.belongTo(models.PostCategories, { as: 'postCategories', foreignkey: 'postCategoriesId' })
  }
  return PostCategories;
};
