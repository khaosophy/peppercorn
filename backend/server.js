const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const mongoose = require('mongoose');
const colors = require('colors');
const errorHandler = require('./middleware/error');

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'development';
const MONGO_URI = process.env.MONGO_URI;

// Establish databse connection
const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(colors.cyan.underline.bold(`MongoDB Connected: ${conn.connection.host}`));
}
connectDB();

// Get route files
const recipes = require('./routes/recipes');

// Initiate!
const app = express();
app.use(express.json());
if(ENV === 'development'){
  app.use(logger('dev'));
}

// Set up routes
app.use('/api/v1/recipes', recipes);

app.use(errorHandler);

// Start server!
const server = app.listen(PORT,
  console.log(colors.yellow.bold(`Server running in ${ENV} on port ${PORT}.`))
);

// Handle rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(colors.red(`Error: ${err.message}`));
  server.close(() => process.exit(1));
})