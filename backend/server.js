const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');

// Get route files
const recipes = require('./routes/recipes');

// Init server
dotenv.config();
const app = express();

// Init Logger
if(process.env.NODE_ENV === 'development'){
  app.use(logger('dev'));
}

// Mount routers
app.use('/api/v1/recipes', recipes);

// Start server!
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}.`));