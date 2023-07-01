import clsx from 'clsx';
import Link from 'next/link';
import routes from '../routes.config';
import Hero from '../components/Hero';
import Container from '../components/Container';

export default function Home() {
  return (
    <main>
      <Hero />
      <Container className="">
        <h3>Whatcha wanna do?</h3>
        <ul>
          <li>Already have an account? <Link href={routes.login}>Log in.</Link></li>
          <li>Want to get started? <Link href={routes.register}>Register now.</Link></li>
          <li>Ready to add a recipe? <Link href={routes.newRecipe}>Get started.</Link></li>
          <li>Looking for your recipes? <Link href={routes.recipes}>Check them out.</Link></li>
        </ul>
      </Container>
    </main>
  )
}
