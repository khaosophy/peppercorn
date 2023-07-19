
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import LoginForm from './LoginForm';

export const metadata = {
  title: 'Sign In | Peppercorn',
  description: 'Sign in to your Peppercorn account and start planning your weekly meals today.',
};

export default function Login() {
  return (<>
    <div className="flex flex-col">
      <Link href="/" aria-label="Home">
        <Logo className="h-10 w-auto" width={110} height={40} />
      </Link>
      <div className="mt-20">
        <h2 className="text-lg font-semibold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Don’t have an account?{' '}
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>{' '}
          for a free trial.
        </p>
      </div>
    </div>
    <LoginForm />
  </>)
}
