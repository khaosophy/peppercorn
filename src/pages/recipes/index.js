import { useEffect, useState } from 'react';
import supabase from '../../lib/supabase';
import Link from '../../components/Link';

export default function Recipes() {
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
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2>Recipes</h2>
      {recipes.length > 0 ? (<RecipeList recipes={recipes} />) : <p>No recipes found.</p>}
      <Link href="/recipes/new">Add a new recipe</Link>
    </main>
  )
}

function RecipeList({ recipes }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          className="py-5"
        >
          <p className="text-sm font-semibold leading-6 text-gray-900">{recipe.name}</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">Serves {recipe.servings}</p>
        </li>
      ))}
    </ul>
  )
}