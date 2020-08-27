import Layout from '../../components/Layout';
import RecipeForm from '../../components/RecipeForm';

const NewRecipe = (props) => {
  return (
    <Layout title="Add a Recipe">
      <h1>Add a New Recipe</h1>
      <RecipeForm
        action="create"
      />
    </Layout>
  )
}

export default NewRecipe;