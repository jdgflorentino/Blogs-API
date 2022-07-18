const { Router } = require('express');
const controller = require('../controllers/index');

const userRouter = Router();

userRouter.post('/login', controller.login);
userRouter.post('/user', controller.register);

module.exports = userRouter;