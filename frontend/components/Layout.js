import PropTypes from 'prop-types';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <div className="container">
      <Head>
        <title>{props.title} | MealPlanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}