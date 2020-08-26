import fetch from 'node-fetch';
import Layout from '../../../components/Layout';
import RecipeForm from '../../../components/RecipeForm';

/**
 * This page can be found at /recipes/[id]
 * It shows a single recipe, and can only be seen by the user who owns it.
 */

const EditRecipe = (props) => {
  const { response, recipeId } = props;
  if(!response.success) return <h1>Error Retrieving Recipe</h1>

  const { name, instructions } = response.data;
  return (
    <Layout title={name}>
      <h1>Edit {name}</h1>
      <RecipeForm 
        data={response.data}
        recipeId={recipeId}
        action="edit"
      />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const recipeId = context.query.id;
  const res = await fetch(`http://localhost:5000/api/v1/recipes/${recipeId}`);
  const response = await res.json();
  return { props: { response, recipeId } };
}

export default EditRecipe;