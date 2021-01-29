import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import { login } from '../utils/auth';
import UserContext from '../context/user';


export default function Login() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await login({email, password});
    if(user) {
      setUser(user);
      router.push('/');
    } else {
      console.error('failed to log in')
    }
  }

  return (
    <Layout title="Log in">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          required
        />
        <InputField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />
        <button type="submit">Log in</button>
      </form>
    </Layout>
  )
}