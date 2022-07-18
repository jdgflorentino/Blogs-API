const service = require('../services/user.service');

const getAllUser = async (req, res) => { 
  const users = await service.getAllUser();
  return res.status(200).json(users);
};

module.exports = getAllUser;