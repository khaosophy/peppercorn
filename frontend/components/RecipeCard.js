import PropTypes from 'prop-types';

const RecipeCard = (props) => (
  <h3>{props.name}</h3>
)

export default RecipeCard;

RecipeCard.propTypes = {
  name: PropTypes.string,
}