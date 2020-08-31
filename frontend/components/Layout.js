import PropTypes from 'prop-types';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <div className="container">
      <Head>
        <title>{props.title} | Peppercorn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={props.mainClass}>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  mainClass: PropTypes.string,
  containerClass: PropTypes.string,
}