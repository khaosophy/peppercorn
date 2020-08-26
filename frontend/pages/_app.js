import 'normalize.css';
//todo: reset? see https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e
import '../styles/styles.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}