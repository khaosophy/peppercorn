import { useState } from 'react';
import { useRouter } from 'next/router';
import routes from '../routes.config';
import supabase from '../lib/supabase';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Link from '../components/Link';

export default function Login() {
  const router = useRouter();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('logging in...');

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      /* TODO: display error */
      return console.error(error);
    }

    console.log(data);
    router.push(routes.home);
  }

  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Log in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">      
        <form className="space-y-6" onSubmit={handleLogin}>
          <InputField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button className="flex w-full justify-center">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Need an account?{' '}
          <Link href={routes.register}>
            Sign up now.
          </Link>
        </p>
      </div>
    </main>
  )
}
