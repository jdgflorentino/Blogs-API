const { User } = require('../database/models');
const { createToken } = require('../middlewares/token');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return false;
  }
  const token = createToken(email);
  return token;
};

const register = async ({ displayName, email, password, image }) => { 
  const user = await User.findOne({ where: { email } });
  if (user) {
    return true;
  }
  await User.create({ displayName, email, password, image });
  const token = createToken(email);
  return token;
};

module.exports = { login, register };