// @desc      Get all recipes for user
// @route     GET /api/v1/recipes
// @access    Public
exports.getRecipes = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'show all recipes',
  });
}

// @desc      Get single recipe based on ID
// @route     GET /api/v1/recipes/:id
// @access    Public
exports.getRecipe = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'show single recipe',
  });
}

// @desc      Create new recipe
// @route     POST /api/v1/recipes
// @access    Public
exports.createRecipe = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'create new recipe',
  });
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