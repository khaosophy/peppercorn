import { useState } from 'react';
import Layout from '../components/Layout';
import InputField from '../components/InputField';

export default function Register() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting...');
  }

  return (
    <Layout title="Register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          value={email}
          onChange={setEmail}
          label="Email Address"
          required
        />
        <InputField
          value={pass}
          onChange={setPass}
          label="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </Layout>
  )
}