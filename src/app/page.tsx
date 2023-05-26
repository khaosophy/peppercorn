import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h3>Whatcha wanna do?</h3>
      <ul>
        <li>Already have an account? <Link href="/login">Log in.</Link></li>
        <li>Want to get started? <Link href="/register">Register now.</Link></li>
      </ul>
    </main>
  )
}
