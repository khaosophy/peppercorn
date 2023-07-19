
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import RegisterForm from './RegisterForm';

export const metadata = {
  title: 'Sign Up | Peppercorn',
  description: 'Sign up for a free Peppercorn account and start planning your weekly meals today.',
};

export default function Register() {
  return (
    <>
      <div className="flex flex-col">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" width={110} height={40} />
        </Link>
        <div className="mt-20">
          <h2 className="text-lg font-semibold text-gray-900">
            Get started for free
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Already registered?{' '}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </Link>{' '}
            to your account.
          </p>
        </div>
      </div>
      <RegisterForm />
    </>
  )
}
