module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define("BlogPosts", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
  });
  BlogPosts.associate = (models) => {
    BlogPosts.belongTo(models.BlogPosts, { as: 'blogPosts', foreignkey: 'blogPosts' })
  }
  return BlogPosts;
};
