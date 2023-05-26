'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../lib/supabase';
import InputField from '../components/InputField';

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
    router.push('/');
  }

  return (
    <main>
      <h3>Register</h3>
      <form onSubmit={handleRegistration}>
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
        <button>Register</button>
      </form>
    </main>
  )
}

