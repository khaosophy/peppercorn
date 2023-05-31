import { useEffect, useState } from 'react';
import supabase from '../../lib/supabase';
import Link from '../../components/Link';

export default function Recipes() {
  /**
   * TODO:
   * * style the list of recipes
   */
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (!session || sessionError) {
        return router.push(routes.login);
      }
      const userId = session.user.id;

      const { data: recipes, error: recipeError } = await supabase.from('recipes').select('*').eq('created_by', userId);
      if (recipeError) {
        /* TODO: display error */
        return console.error(recipeError);
      }
      setRecipes(recipes);
    }

    getRecipes();
  }, []);

  return (
    <main>
      <h2>Recipes</h2>
      {recipes.length > 0 ? (<RecipeList recipes={recipes} />) : <p>No recipes found.</p>}
      <Link href="/recipes/new">Add a new recipe</Link>
    </main>
  )
}

function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </ul>
  )
}