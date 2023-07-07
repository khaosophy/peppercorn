'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import routes from '@/routes.config';
import supabase from '@/lib/supabase';

import Link from '@/components/Link';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import Logo from '@/components/Logo';

export const metadata = {
  /* todo: this isn't working? */
  title: 'Sign In | Peppercorn',
};

export default function Page() {
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
    router.push(routes.recipes);
  }

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
    <form className="mt-10 grid grid-cols-1 gap-y-8" onSubmit={handleLogin}>
      <TextField
        label="Email address"
        id="loginEmail"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        id="loginPassword"
        name="password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div>
        <Button
          type="submit"
          variant="solid"
          color="blue"
          className="w-full"
        >
          <span>
            Sign in <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </form>
  </>)
}
