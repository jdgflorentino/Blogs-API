const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => { 
  const { authorization } = req.headers;
  if (!authorization) { 
    return res.status(401).json({ message: 'Token not found' });
  }
  try { 
    const payload = await jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) { 
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}; 

const createToken = (email) => { 
  const token = jwt.sign({ data: email }, process.env.JWT_SECRET,
    { expiresIn: '1h', algorithm: 'HS256' });
  return token;
};

module.exports = { createToken, verifyToken };