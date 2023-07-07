'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

import routes from '@/routes.config';
import supabase from '@/lib/supabase';

import Link from '@/components/Link';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import Logo from '@/components/Logo';

export default function Register() {
  const router = useRouter();
  const [ email, setEmail ] = useState('');
  // TODO: password should be at least six characters long
  const [ password, setPassword ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log('registering...');

    const { data, error } = await supabase.auth.signUp({ email, password });
    /* TODO: save first and last name to database */

    if (error) {
      /* TODO: display error */
      return console.error(error);
    }

    console.log(data);
    router.push(routes.home);
  }

  return (
    <>
      <Head>
        <title>Sign Up | TaxPal</title>
      </Head>
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
      <form
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        onSubmit={handleRegistration}
      >
        <TextField
          label="First name"
          id="first_name"
          name="first_name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          id="last_name"
          name="last_name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Password"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <div className="col-span-full">
          <Button
            type="submit"
            variant="solid"
            color="blue"
            className="w-full"
          >
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </>
  )
}
