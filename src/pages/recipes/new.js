
import { useState, useEffect } from 'react';
import router from 'next/router';
import clsx from 'clsx';
import routes from '../../routes.config';
import supabase from '../../lib/supabase';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

export default function NewRecipe() {
  const [formData, setFormData] = useState({
    name: '',
    servings: 0,
  });
  const [userId, setUserId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitting form');
    
    const { error } = await supabase
      .from('recipes')
      .insert({
        name: formData.name,
        servings: formData.servings,
        created_by: userId,
      });
    
    if (error) {
      /* TODO: display error */
      return console.error(error);
    }

    router.push(routes.recipes);
  }

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (!session || error) {
        return router.push(routes.login);
      }
      setUserId(session.user.id);
    }
    getSession();
  }, []);

  return (
    <main className={clsx(
      'max-w-6xl mx-auto',
      'flex flex-1 flex-col justify-center',
      'min-h-full py-4 px-2',
    )}>
      <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Add a new recipe</h2>
      <form
        className="mt-6 max-w-md space-y-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField 
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <TextField
          label="Servings"
          name="servings"
          type="number"
          value={formData.servings}
          onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
        />

        <Button>Save Recipe</Button>
      </form>
    </main>
  )
}