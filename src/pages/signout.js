import { useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from '../lib/supabase';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    console.log('signing you out...');

    const { error } = supabase.auth.signOut();

    if (error) {
      return console.error(error);
    }

    router.push('/');
  }, [router]);

  return (
    <main>
      <h3>Logging you out...</h3>
    </main>
  )
}
