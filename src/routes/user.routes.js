const { Router } = require('express');
const controller = require('../controllers/login.controller');

const userRouter = Router();

userRouter.post('/login', controller.login);

module.exports = userRouter;