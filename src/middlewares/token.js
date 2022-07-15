const jwt = require('jsonwebtoken');

const createToken = (email) => { 
  const token = jwt.sign({ data: email }, process.env.JWT_SECRET,
    { expiresIn: '1h', algorithm: 'HS256' });
  return token;
};

module.exports = { createToken };