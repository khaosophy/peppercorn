const express = require('express');
const router = express.Router();
const {
  getIngredients,
  getSingleIngredient,
} = require('../controllers/ingredients');

router.route('/')
  .get(getIngredients);

router.route('/:id')
  .get(getSingleIngredient);

module.exports = router;