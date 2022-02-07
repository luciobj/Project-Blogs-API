const { User } = require('../../models');

const userList = async () => {
  const dbList = await User.findAll();
  return dbList;
};

module.exports = userList;
