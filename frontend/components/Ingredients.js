import PropTypes from 'prop-types';
import InputField from './InputField';

function Ingredients(props) {
  const { ingredients, setIngredients } = props;

  const addIngredient = () => {
    setIngredients([...ingredients, {
      _id: Date.now(), // TEMP value for React, MongoDB will assign a real ID on save
      name: '',
    }])
  }

  const deleteIngredient = (event, key) => {
    event.preventDefault();
    const newIngredientList = [...ingredients].filter(item => item._id !== key);
    setIngredients(newIngredientList);
  }

  const updateIngredient = (event, index) => {
    const newIngredientList = JSON.parse(JSON.stringify(ingredients)); // deep copy the array of objects
    /* todo: why is a deep copy needed here but not in delete? is this overkill? */
    newIngredientList[index] = event.target.value;
    setIngredients(newIngredientList);
  }

  return (
    <fieldset>
      <legend>Ingredients</legend>
      {ingredients.length > 0 ? ingredients.map((item, _i) => (
        <div style={{ display: 'flex' }} key={_i}>
          <InputField
            type="text"
            label="Ingredient"
            onChange={(e) => updateIngredient(e, _i)}
            value={item}
          />
          {/* style? chopped, diced, strained, etc */}
          <button onClick={(e) => deleteIngredient(e, _i)}>Delete</button>
        </div>
      ))
    : (
      // no ingredients found, please add some
      // todo on instructions too
      <p>No ingredients found, please add some.</p>
    )}
    <span
        style={{ cursor: 'pointer' }}
        onClick={addIngredient}
      >
        + Add Ingredient
      </span>
    </fieldset>
  )
}

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,  //todo array of shape
  setIngredients: PropTypes.func.isRequired,
}

export default Ingredients;