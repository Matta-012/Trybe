import React from 'react';
import PropTypes from 'prop-types';

function LoginButton({ isLoginBtnDisabled }) {
  return (
    <button
      type="submit"
      className="btn btn-primary w-100"
      disabled={ isLoginBtnDisabled }
    >
      Entrar
    </button>
  );
}

LoginButton.propTypes = {
  isLoginBtnDisabled: PropTypes.bool.isRequired,
};

export default LoginButton;
