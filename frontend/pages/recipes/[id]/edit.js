import fetch from 'node-fetch';
import Layout from '../../../components/Layout';
import RecipeForm from '../../../components/RecipeForm';

/**
 * This page can be found at /recipes/[id]
 * It shows a single recipe, and can only be seen by the user who owns it.
 */

const Recipe = ({ response }) => {
  if(!response.success) return <h1>Error Retrieving Recipe</h1>

  const { name, instructions } = response.data;
  return (
    <Layout title={name}>
      <h1>Edit {name}</h1>
      <RecipeForm 
        data={response.data}
        onSubmit={() => {}} 
      />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/v1/recipes/${context.query.id}`);
  const response = await res.json();
  return { props: { response } };
}

export default Recipe;