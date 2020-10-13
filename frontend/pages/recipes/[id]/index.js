import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/Layout';

/**
 * This page can be found at /recipes/[id]
 * It shows a single recipe, and can only be seen by the user who owns it.
 */

export default function Recipe(props) {
  const { response, recipeId } = props;
  const router = useRouter();

  async function handleDelete() {
    //todo: make user confirm delete
    const res = await fetch(`http://localhost:5000/api/v1/recipes/${recipeId}`, {
      method: 'DELETE',
    })
    const response = await res.json();
    if(response.success) {
      router.push('/recipes');
      //todo: show success notice
      console.log('successfully deleted!');
    } else {
      console.error('issue deleting recipe...');
    }
  }

  if(!response.success) return <h1>Error Retrieving Recipe</h1>

  const { 
    name,
    instructions,
    description,
    servings,
    image
  } = response.data;
  
  return (
    <Layout title={name}>
      <Link href="/recipes">
        <a>&larr; Back to Recipes</a>
      </Link>
      <h1>{name}</h1>
      {/* todo: abstract domain and path below */}
      <img src={`http://localhost:5000/uploads/${image}`} style={{ width: '500px' }} />
      <div className="recipe__utility">
        {servings && <p className="recipe__servings">Serves {servings}</p>}
        <Link href={`/recipes/${recipeId}/edit`}>
          <a className="recipe__edit">Edit</a>
        </Link>
        <a 
          href="#"
          className="recipe__delete"
          onClick={handleDelete}
        >
            Delete
        </a>
      </div>

      {description && <p className="recipe__description">{description}</p>}

      <ol className="recipe__steps">
        {instructions.map((step) => <li key={step._id}>{step.text}</li>)}
      </ol>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const recipeId = context.query.id;
  const res = await fetch(`http://localhost:5000/api/v1/recipes/${recipeId}`);
  const response = await res.json();
  return { props: { response, recipeId } };
}