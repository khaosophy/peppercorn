import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import routes from '@/routes.config';

export default function Header() {
  return (
    <header className="border-b border-gray-400">
      <div className={classNames(
        'max-w-6xl mx-auto',
        'flex justify-between items-center',
        'py-2 px-2',
      )}>
        <Link href={routes.home}>
          <Image src="/logo.png" width={200} height={74} alt="Logo" />
        </Link>
        <MainNav />
      </div>
    </header>
  );
}

const MainNav = () => {
  const linkStyles = classNames(
    'text-gray-900 hover:text-gray-700',
    'px-3 py-2 rounded-md text-sm font-medium',
    'hover:bg-gray-200',
  );
  return (
    <nav>
      <ul className="flex items-center space-x-8">
        <li>
          <Link href={routes.home} className={linkStyles}>Home</Link>
        </li>
        <li>
          <Link href={routes.recipes} className={linkStyles}>Recipes</Link>
        </li>
        <li>
          <Link href={routes.login} className={linkStyles}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}