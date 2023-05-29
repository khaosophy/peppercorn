import { useEffect, useState } from 'react';
import supabase from '../../lib/supabase';
import Link from '../../components/Link';

export default function Recipes() {
  /**
   * TODO:
   * * fetch only recipes that the user created
   *   * when saving, pass the user id (created_by) to the recipe
   *   * see the Supabase permission templates
   * * style the list of recipes
   */
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
    const { data, error } = await supabase.from('recipes').select('*');

      if (error) {
        /* TODO: display error */
        return console.error(error);
      }
      console.log(data);
      setRecipes(data);
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