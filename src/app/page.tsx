import Link from 'next/link';
import routes from '../routes.config';

export default function Home() {
  return (
    <main>
      <h3>Whatcha wanna do?</h3>
      <ul>
        <li>Already have an account? <Link href={routes.login}>Log in.</Link></li>
        <li>Want to get started? <Link href={routes.register}>Register now.</Link></li>
      </ul>
    </main>
  )
}
