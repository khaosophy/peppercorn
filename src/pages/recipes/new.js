
import { useState, useEffect } from 'react';
import router from 'next/router';
import routes from '@/routes.config';
import supabase from '@/lib/supabase';
import Container from '@/components/Container';
import TextField from '@/components/TextField';
// import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import Instructions from '@/components/Instructions';

export default function NewRecipe() {
  const [formData, setFormData] = useState({
    name: '',
    instructions: ['Step 1', 'Step 2', 'Step 3'],
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
    <Layout>
      <main>
        <Container className="mb-20">
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

            {/* <TextArea
              label="Ingredients"
              name="ingredients"
              value={formData.ingredients}
              rows={5}
              onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
            /> */}

            <Instructions
              value={formData.instructions}
              onChange={setFormData}
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
        </Container>
      </main>
    </Layout>
  )
}