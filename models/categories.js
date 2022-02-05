module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    name: DataTypes.STRING,
  });
  Categories.associate = (models) => {
    Categories.belongTo(models.Categories, { as: 'categories', foreignkey: 'categoriesId' })
  }
  return Categories;
};
