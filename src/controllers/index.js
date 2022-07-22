const login = require('./login.controller');
const register = require('./user.controller');
const { getAllUser, getUserById } = require('./getUser.controller');
const { createCategory, getAllCategories } = require('./category.controller');
const { getAllPosts, getPostById } = require('./post.controller');

module.exports = {
  login,
  register,
  getAllUser,
  getUserById,
  createCategory,
  getAllCategories,
  getAllPosts,
  getPostById,
};