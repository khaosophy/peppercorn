import React from 'react';

const RegisterForm = () => {
  return (
    <form action="">
      <label htmlFor="registerEmail">
        <input id="registerEmail" type="email" />
      </label>
      <label htmlFor="registerPass">
        <input id="registerPass" type="password" />
      </label>
      <label htmlFor="registerConfirmPass">
        <input id="registerConfirmPass" type="password" />
      </label>
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterForm;
