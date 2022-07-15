const service = require('../services/user.service');

const login = async (req, res) => { 
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const isValid = await service.login({ email, password });
  if (isValid === false) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token: isValid });
};

module.exports = { login };