import React from 'react';

const LoginForm = () => {
  return (
    <form action="">
      <label htmlFor="loginEmail">
        <input id="loginEmail" type="email" />
      </label>
      <label htmlFor="loginPass">
        <input id="loginPass" type="password"/>
      </label>
      <input type="submit" value="Log in" />
    </form>
  );
};

export default LoginForm;
