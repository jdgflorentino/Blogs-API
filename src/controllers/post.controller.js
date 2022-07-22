const service = require('../services/post.service');

const getAllPosts = async (req, res) => { 
  const posts = await service.getAllPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => { 
  const post = await service.getPostById(req.params.id);
  if (!post) { 
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

module.exports = { getAllPosts, getPostById };