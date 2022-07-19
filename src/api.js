const express = require('express');
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');
const postRoutes = require('./routes/post.routes');

// ...

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(categoryRoutes);
app.use(postRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
