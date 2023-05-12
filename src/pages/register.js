'use client';
import { useState } from 'react';
import InputField from '../components/InputField';

export default function Register() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleRegistration = () => {
    console.log('register');
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
