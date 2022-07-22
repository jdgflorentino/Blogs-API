const { Router } = require('express');
const { verifyToken } = require('../middlewares/token');
const controller = require('../controllers/index');

const postRouter = Router();

postRouter.get('/post', verifyToken, controller.getAllPosts);
postRouter.get('/post/:id', verifyToken, controller.getPostById);

module.exports = postRouter;