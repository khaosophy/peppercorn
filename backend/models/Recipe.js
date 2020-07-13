const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please include a name.'],
    unique: false,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters.'],
  },
  ingredients: {
    type: String,
  },
  instructions: {
    type: String,
  },
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);