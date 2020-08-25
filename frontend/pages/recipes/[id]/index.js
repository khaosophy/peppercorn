import fetch from 'node-fetch';
import Layout from '../../../components/Layout';

/**
 * This page can be found at /recipes/[id]
 * It shows a single recipe, and can only be seen by the user who owns it.
 */

const Recipe = ({ response }) => {
  if(!response.success) return <h1>Error Retrieving Recipe</h1>

  const { name, instructions } = response.data;
  return (
    <Layout title={name}>
      <h1>{name}</h1>
      
      <ol className="recipe__steps">
        {instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ol>

      {/* todo: link to edit page */}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/v1/recipes/${context.query.id}`);
  const response = await res.json();
  return { props: { response } };
}

export default Recipe;