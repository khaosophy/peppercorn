const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please include a name.'],
    unique: false,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters.'],
  },
  description: String,
  type: {
    type: String,
    enum: ['One Pot', 'Side', 'Main'],
  },
  image: String,
  servings: Number,
  ingredients: String,  // todo: this will be another data type
  instructions: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// todo: map to certain users

module.exports = mongoose.model('Recipe', RecipeSchema);