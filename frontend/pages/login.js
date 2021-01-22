import { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import InputField from '../components/InputField';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { email, password }
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', userData, config);
      console.log(response);
      // todo: store session
      // todo: redirect to recipe page
    } catch (err) {
      console.error(err.message);
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