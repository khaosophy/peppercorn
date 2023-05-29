import { useState } from 'react';
import { useRouter } from 'next/router';
import routes from '../routes.config';
import supabase from '../lib/supabase';
import InputField from '../components/InputField';

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
    <main>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
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
        <button>Login</button>
      </form>
    </main>
  )
}
