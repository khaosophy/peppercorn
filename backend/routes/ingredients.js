const express = require('express');
const router = express.Router();
const {
  getIngredients,
} = require('../controllers/ingredients');

router.route('/')
  .get(getIngredients);

module.exports = router;