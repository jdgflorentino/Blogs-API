const service = require('../services/user.service');

const getAllUser = async (req, res) => { 
  const users = await service.getAllUser();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => { 
  const { id } = req.params;
  const user = await service.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = { getAllUser, getUserById };