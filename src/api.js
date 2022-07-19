const express = require('express');
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');

// ...

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(categoryRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
