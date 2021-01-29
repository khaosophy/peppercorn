import Link from 'next/link';
import { useContext } from 'react';
import UserContext from '../context/user';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
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
          {(user) ? (
            <li>
              <Link href="/logout">
                <a>Log out</a>
              </Link>
            </li>
          ) : (<>
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
          </>)}
        </ul>
      </nav>
    </header>
  )
}