const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please include a name.'],
    unique: true,
    trim: true,
    lowercase: true,
    maxlength: [25, 'Name cannot be more than 25 characters.'],
  },
})

module.exports = mongoose.model('Ingredient', IngredientSchema);