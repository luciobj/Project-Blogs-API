const { User } = require('../../models');

const userDeleteCurrent = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = userDeleteCurrent;
