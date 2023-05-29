import { useEffect, useState } from 'react';
import supabase from '../../lib/supabase';
import Link from '../../components/Link';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
    let { data, error } = await supabase.from('recipes').select('*');

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