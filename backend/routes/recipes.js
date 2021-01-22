const express = require('express');
const router = express.Router();
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  uploadRecipeImage
} = require('../controllers/recipes');
const { protect } = require('../middleware/auth');

router.route('/')
  .get(protect, getRecipes)
  .post(protect, createRecipe);

router.route('/:id')
  .get(protect, getRecipe)
  .put(protect, updateRecipe)
  .delete(protect, deleteRecipe)

router.route('/:id/photo')
  .put(protect, uploadRecipeImage);

module.exports = router;