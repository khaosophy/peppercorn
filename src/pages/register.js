'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import routes from '../routes.config';
import supabase from '../lib/supabase';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function Register() {
  const router = useRouter();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState(''); // TODO: password should be at least six characters long

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log('registering...');

    const { data, error } = await supabase.auth.signUp({ email, password });

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
        Register for a new account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleRegistration}>
          <InputField
            id="register-email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            id="register-password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button className="flex w-full justify-center">
            Register
          </Button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link href={routes.login} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log in now.
          </Link>
        </p>
      </div>
    </main>
  )
}

