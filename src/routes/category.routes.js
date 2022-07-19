const { Router } = require('express');
const { verifyToken } = require('../middlewares/token');
const controller = require('../controllers/index');

const categoryRouter = Router();

categoryRouter.post('/categories', verifyToken, controller.createCategory);

module.exports = categoryRouter;