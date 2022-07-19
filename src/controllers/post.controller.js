const service = require('../services/post.service');

const getAllPosts = async (req, res) => { 
  const posts = await service.getAllPosts();
  return res.status(200).json(posts);
};

module.exports = { getAllPosts };