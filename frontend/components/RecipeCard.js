import PropTypes from 'prop-types';
import Link from 'next/link';

const RecipeCard = (props) => (
  <div id={props.id} className="card">
    <div className="card__header">
      <Link href={`/recipes/${props.id}`}>
        <a>
          {/* todo: better 'NO IMAGE' */}
          {/* todo: abstract the image domain & path */}
          <img
            src={props.image ? `http://localhost:5000/uploads/${props.image}` : 'https://baconmockup.com/250/150'}
            alt={`${props.name}`}
            className="card__image"
          />
        </a>
      </Link>
    </div>
    <div className="card__body">
      <Link href={`/recipes/${props.id}`}>
        <a>{props.name}</a>
      </Link>
    </div>
  </div>
)

export default RecipeCard;

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
}