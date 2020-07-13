const Recipe = require('../models/Recipe');

// @desc      Get all recipes for user
// @route     GET /api/v1/recipes
// @access    Public
exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes,
    })
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc      Get single recipe based on ID
// @route     GET /api/v1/recipes/:id
// @access    Public
exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if(!recipe) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: recipe,
    })
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc      Create new recipe
// @route     POST /api/v1/recipes
// @access    Public
exports.createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);

    res.status(201).json({
      success: true,
      data: recipe,
    });
  } catch(err) {
    res.status(400).json({ success: false });
  }
}

// @desc      Update recipe based on ID
// @route     PUT /api/v1/recipes/:id
// @access    Public
exports.updateRecipe = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'update recipe',
  });
}

// @desc      Delete recipe based on ID
// @route     DELETE /api/v1/recipes/:id
// @access    Public
exports.deleteRecipe = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'delete recipe',
  });
}