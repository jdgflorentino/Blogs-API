const login = require('./login.controller');
const register = require('./user.controller');
const { getAllUser, getUserById } = require('./getUser.controller');

module.exports = { login, register, getAllUser, getUserById };