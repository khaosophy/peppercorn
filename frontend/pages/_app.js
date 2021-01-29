import { useMemo, useState } from 'react';
import UserContext from '../context/user';
import 'normalize.css';
//todo: reset? see https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e
import '../styles/styles.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  /* todo: check to see if user is logged in on load */
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={userValue}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}