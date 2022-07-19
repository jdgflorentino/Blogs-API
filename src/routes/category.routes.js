const { Router } = require('express');
const { verifyToken } = require('../middlewares/token');
const controller = require('../controllers/index');

const categoryRouter = Router();

categoryRouter.post('/categories', verifyToken, controller.createCategory);
categoryRouter.get('/categories', verifyToken, controller.getAllCategories);

module.exports = categoryRouter;