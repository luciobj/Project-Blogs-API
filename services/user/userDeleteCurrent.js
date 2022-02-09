const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../../models');

const userDeleteCurrent = async (token) => {
  const { data } = jwt.verify(token, process.env.JWT_SECRET);
  const { email } = data;
  await User.DeleteOne({ where: { email } });
};

module.exports = userDeleteCurrent;
