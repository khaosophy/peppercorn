'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import routes from '@/routes.config';
import supabase from '@/lib/supabase';

import TextField from '@/components/TextField';
import Button from '@/components/Button';

export default function LoginForm () {
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

  return (
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
  )
}