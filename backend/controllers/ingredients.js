const Ingredient = require('../models/Ingredient');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc      Get all ingredients
// @route     GET /api/v1/ingredients
// @access    Public
exports.getIngredients = asyncHandler(async (req, res, next) => {
  const ingredients = await Ingredient.find();

  res.status(200).json({
    success: true,
    count: ingredients.length,
    data: ingredients,
  });
});