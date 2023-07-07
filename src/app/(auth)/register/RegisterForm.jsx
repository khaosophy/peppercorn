'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import routes from '@/routes.config';
import supabase from '@/lib/supabase';

import TextField from '@/components/TextField';
import Button from '@/components/Button';

export default function RegisterForm() {
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
  )
}