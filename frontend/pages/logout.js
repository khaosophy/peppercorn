import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { logout } from "../utils/auth";
import UserContext from '../context/user';

export default function Logout() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  
  useEffect(() => {
    setUser(null);
    logout();
    router.push('/');
  }, []);

  return (
    <h1>We are logging you out...</h1>
  )
}