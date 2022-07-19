const { Router } = require('express');
const controller = require('../controllers/index');
const { verifyToken } = require('../middlewares/token');

const userRouter = Router();

userRouter.post('/login', controller.login);
userRouter.post('/user', controller.register);
userRouter.get('/user', verifyToken, controller.getAllUser);
userRouter.get('/user/:id', verifyToken, controller.getUserById);

module.exports = userRouter;