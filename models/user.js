module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  User.associate = (models) => {
    User.belongTo(models.User, { as: 'user', foreignkey: 'userId' })
  }
  return User;
};
