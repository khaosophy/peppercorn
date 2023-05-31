
import { useState, useEffect, use } from 'react';
import router from 'next/router';
import routes from '../../routes.config';
import supabase from '../../lib/supabase';
import InputField from '../../components/InputField';
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
    <main className="px-6 py-12 lg:px-8">
      <h2>Add a new recipe</h2>
      <form
        className="mt-6 max-w-md space-y-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <InputField 
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <InputField
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