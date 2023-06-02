import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import supabase from '../../lib/supabase';

export default function MealPlan() {
  /**
   * This file will have two sections:
   * 1. a sidebar with all of the user's recipes
   * 2. the main section which will be the week's meal plan
   * 
   * The main section will require the following UI:
   * 1. dates for the week being displayed
   * 2. seven columns for each day of the week, broken up into three section (breakfast, lunch, dinner)
   * 3. a setting to specify how many people per meal
   * 
   * 
   * The sidebar will require the following UI:
   * 1. a text bar for searching
   * 2. a list of the user's recipes
   * 3. a button to add a new recipe (they can also drag and drop recipes from the sidebar to the main section, but this will be a stretch goal)
   */
  const router = useRouter();
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
    <main className={classNames(
      'flex flex-row-reverse justify-center',
    )}>
      <div className="flex-1 p-4">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Meal Plan</h2>  
      </div>

      <div className="bg-indigo-400 p-4">
        <h3 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">Recipes</h3>
        <RecipeList recipes={recipes} />
      </div>
    </main>
  );
} 

function RecipeList({ recipes }) {
  return (
    <ul role="list" className="divide-y divide-gray-100 my-3">
      {recipes.map((recipe) => (
        <li key={recipe.id} className="py-5 flex justify-between items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold leading-6 text-gray-900">{recipe.name}</p>
            <p className="mt-1 text-xs leading-5 text-gray-200">Serves {recipe.servings}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}