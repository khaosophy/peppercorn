import fetch from 'node-fetch';
import Link from 'next/link';
import Layout from '../../../components/Layout';

/**
 * This page can be found at /recipes/[id]
 * It shows a single recipe, and can only be seen by the user who owns it.
 */

const Recipe = (props) => {
  const { response, recipeId } = props;
  if(!response.success) return <h1>Error Retrieving Recipe</h1>

  const { name, instructions, description, servings } = response.data;
  return (
    <Layout title={name}>
      <h1>{name}</h1>
      
      <div className="recipe__utility">
        {servings && <p className="recipe__servings">Serves {servings}</p>}
        <Link href={`/recipes/${recipeId}/edit`}>
          <a className="recipe__edit">Edit</a>
        </Link>
      </div>

      {description && <p className="recipe__description">{description}</p>}

      <ol className="recipe__steps">
        {instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const recipeId = context.query.id;
  const res = await fetch(`http://localhost:5000/api/v1/recipes/${recipeId}`);
  const response = await res.json();
  return { props: { response, recipeId } };
}

export default Recipe;