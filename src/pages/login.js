import { useState } from 'react';
import InputField from '../components/InputField';

export default function Login() {
  const [ email, setEmail ] = useState<String>('');
  const [ password, setPassword ] = useState('');

  const handleLogin = () => {
    console.log('login');
  }

  return (
    <main>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <InputField
          type="email"
          label="Email"
          value={email}
          onChange={setEmail}
          required
        />
        <InputField
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
          required
        />
        <button>Login</button>
      </form>
    </main>
  )
}
