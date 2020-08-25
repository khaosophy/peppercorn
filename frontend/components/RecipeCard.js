import PropTypes from 'prop-types';
import Link from 'next/link';

const RecipeCard = (props) => (
  <div id={props.id} className="card">
    <Link href={`/recipes/${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </div>
)

export default RecipeCard;

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
}