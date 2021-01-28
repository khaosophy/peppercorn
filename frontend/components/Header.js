import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* logo goes here */}
      <nav>
        <ul>
          <li>
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}