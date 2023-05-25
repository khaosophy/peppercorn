import { useState } from 'react';
import InputField from '../components/InputField';

export default function Login() {
  const [ email, setEmail ] = useState('');
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
