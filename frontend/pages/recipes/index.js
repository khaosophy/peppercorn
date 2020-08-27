import fetch from 'node-fetch';
import Link from 'next/link';
import Layout from '../../components/Layout';
import RecipeCard from '../../components/RecipeCard';

/**
 * This page can be found it /recipes
 * It shows all recipes for the logged in user.
 */

function Recipes({ response }) {
  return (
    <Layout title="My Recipes">
        <h1>Recipes</h1>
        {response.success ? 
          <React.Fragment>
            {response.data.map((recipe) => (
              <RecipeCard 
                key={recipe._id}
                id={recipe._id}
                name={recipe.name}
              />
            ))}
            <Link href="/recipes/new">
              <a style={{ display: 'block', marginTop: '3rem' }}>+ Add a New Recipe</a>
            </Link>
          </React.Fragment>
          : <h2>Failed to retrieve your recipes.</h2>
        }
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/v1/recipes`);
  const response = await res.json();
  return { props: { response } };
}

export default Recipes;