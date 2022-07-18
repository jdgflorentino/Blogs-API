const Joi = require('joi');
const service = require('../services/user.service');

const registerSchema = Joi.object({
    displayName: Joi.string().min(8).required()
      .messages({ 'string.min': '"displayName" length must be at least 8 characters long' }),
    email: Joi.string().email().required()
      .messages({ 'string.email': '"email" must be a valid email' }),
    password: Joi.string().min(6).required()
      .messages({ 'string.min': '"password" length must be at least 6 characters long' }),
  image: Joi.string(),
});

const register = async (req, res) => { 
  const { displayName, email, password, image } = req.body;
  const { error } = registerSchema.validate({ displayName, email, password, image });
  if (error) return res.status(400).json({ message: error.details[0].message });
  const isRegistered = await service.register({ displayName, email, password, image });
  if (isRegistered === true) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return res.status(201).json({ token: isRegistered });
};

module.exports = register;