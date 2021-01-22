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
  ingredients: [String],
  instructions: [{
    position: Number,
    text: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);