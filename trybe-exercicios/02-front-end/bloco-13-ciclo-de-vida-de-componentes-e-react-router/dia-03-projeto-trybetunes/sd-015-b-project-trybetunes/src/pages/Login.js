import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    const { isLoginBtnDisabled, userName, handleSubmit, handleChange } = this.props;
    return (
      <div data-testid="page-login" className="mt-3">
        <header>
          <h1 className="text-center mt-3">TrybeTunes</h1>
        </header>
        <Form
          className="w-25 container d-flex flex-column"
          onSubmit={ handleSubmit }
        >
          <FloatingLabel
            controlId="floatingInput"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nome"
              data-testid="login-name-input"
              name="userName"
              value={ userName }
              onChange={ handleChange }
            />
          </FloatingLabel>

          <Button
            variant="primary"
            type="submit"
            data-testid="login-submit-button"
            disabled={ isLoginBtnDisabled }
          >
            Entrar
          </Button>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  isLoginBtnDisabled: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Login.defaultProps = {
  userName: '',
};

export default Login;
