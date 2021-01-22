const Recipe = require('../models/Recipe');
const path = require('path');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc      Get all recipes for user
// @route     GET /api/v1/recipes
// @access    Private
exports.getRecipes = asyncHandler(async (req, res, next) => {
  const recipes = await Recipe.find({ user: req.user.id });

  res.status(200).json({
    success: true,
    count: recipes.length,
    data: recipes,
  })
});

// @desc      Get single recipe based on ID
// @route     GET /api/v1/recipes/:id
// @access    Private
exports.getRecipe = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.id);

  if(!recipe) {
    return next(new ErrorResponse(`Recipe not found with id of ${req.params.id}`, 404));
  }

  if(recipe.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`Recipe ${req.params.id} is not available for user ${req.user.id}`));
  }

  res.status(200).json({
    success: true,
    data: recipe,
  })
});

// @desc      Create new recipe
// @route     POST /api/v1/recipes
// @access    Private
exports.createRecipe = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  const recipe = await Recipe.create(req.body);

  res.status(201).json({
    success: true,
    data: recipe,
  });
});

// @desc      Update recipe based on ID
// @route     PUT /api/v1/recipes/:id
// @access    Private
exports.updateRecipe = asyncHandler(async (req, res, next) => {
  let recipe = await Recipe.findById(req.params.id);

  if(!recipe) {
    return next(new ErrorResponse(`Recipe not found with id of ${req.params.id}`, 404));
  }

  if(recipe.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to update recipe ${req.params.id}`));
  }

  recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: recipe,
  })
});

// @desc      Delete recipe based on ID
// @route     DELETE /api/v1/recipes/:id
// @access    Private
exports.deleteRecipe = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.id);

  if(!recipe) {
    return next(new ErrorResponse(`Recipe not found with id of ${req.params.id}`, 404));
  }

  if(recipe.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete recipe ${req.params.id}`));
  }

  recipe.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
})

// @desc      Upload image for recipe
// @route     PUT /api/v1/recipes/:id/photo
// @access    Private
exports.uploadRecipeImage = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.id);

  if(!recipe) {
    return next(new ErrorResponse(`No recipe with id of ${req.params.id} exists.`, 404));
  }

  if(recipe.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to update recipe ${req.params.id}`));
  }

  if(!req.files) {
    return next(new ErrorResponse('Please include a file.', 400));
  }

  const { file } = req.files;

  // is the image a photo? (e.g. mimetype === jpeg)
  if(!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse('Please upload a valid image file.', 400));
  }

  // check filesize
  if(file.size > process.env.FILE_UPLOAD_MAXSIZE) {
    return next(new ErrorResponse(`Image must be smaller than ${process.env.FILE_UPLOAD_MAXSIZE}.`, 400));
  }

  file.name = `${recipe._id}${path.parse(file.name).ext}`;
  console.log(`Saving image ${file.name}`);

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if(err) {
      console.error(err);
      return next(new ErrorResponse('Problem with file upload', 500));
    }

    await Recipe.findByIdAndUpdate(req.params.id, { image: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    })
  })
})