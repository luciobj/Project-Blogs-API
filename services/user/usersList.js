const { User } = require('../../models');

const usersList = async () => {
  const dbList = await User.findAll();
  return dbList;
};

module.exports = usersList;
