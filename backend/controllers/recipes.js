const Recipe = require('../models/Recipe');
const asyncHandler = require('../middleware/async');

// @desc      Get all recipes for user
// @route     GET /api/v1/recipes
// @access    Public
exports.getRecipes = asyncHandler(async (req, res, next) => {
  const recipes = await Recipe.find();

  res.status(200).json({
    success: true,
    count: recipes.length,
    data: recipes,
  })
});

// @desc      Get single recipe based on ID
// @route     GET /api/v1/recipes/:id
// @access    Public
exports.getRecipe = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.id);

  if(!recipe) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({
    success: true,
    data: recipe,
  })
});

// @desc      Create new recipe
// @route     POST /api/v1/recipes
// @access    Public
exports.createRecipe = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.create(req.body);

  res.status(201).json({
    success: true,
    data: recipe,
  });
});

// @desc      Update recipe based on ID
// @route     PUT /api/v1/recipes/:id
// @access    Public
exports.updateRecipe = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if(!recipe) {
    return res.status(400).json({ 
      success: false,
      message: 'Recipe not found',
    });
  }

  res.status(200).json({
    success: true,
    data: recipe,
  })
});

// @desc      Delete recipe based on ID
// @route     DELETE /api/v1/recipes/:id
// @access    Public
exports.deleteRecipe = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findByIdAndDelete(req.params.id);

  if(!recipe) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({
    success: true,
    data: {},
  });
})