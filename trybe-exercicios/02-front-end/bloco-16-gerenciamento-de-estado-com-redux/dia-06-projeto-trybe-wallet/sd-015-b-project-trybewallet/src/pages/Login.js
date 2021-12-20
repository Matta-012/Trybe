import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginButton from '../components/login/LoginButton';
import { loginAction } from '../actions';
import CustomTextInput from '../components/CustomTextInput';

const IMG_PATH = 'https://st4.depositphotos.com/18664664/23990/v/450/depositphotos_239900838-stock-illustration-digital-wallet-icon-trendy-digital.jpg';
const MIN_LENGTH = 6;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoginBtnDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.isPasswordValid = this.isPasswordValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, this.isFormValid);
  }

  isEmailValid(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }

  isPasswordValid(password) {
    return password.length >= MIN_LENGTH;
  }

  isFormValid() {
    const { email, password } = this.state;
    const isValid = this.isEmailValid(email) && this.isPasswordValid(password);

    this.setState({ isLoginBtnDisabled: !isValid });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;

    dispatch(loginAction(email));
    history.push('/carteira');
  }

  render() {
    const { email, password, isLoginBtnDisabled } = this.state;
    return (
      <section
        className={ `login-wrapper d-flex
          flex-column p-4 align-items-center` }
      >
        <img src={ IMG_PATH } alt="Digital Wallet" width="200" />
        <form onSubmit={ this.handleSubmit }>
          <CustomTextInput
            id="email-input"
            name="email"
            value={ email }
            type="email"
            aria="emailHelp"
            labelName="Email"
            testID="email-input"
            placeholder="Digite seu email"
            handleChange={ this.handleChange }
          />
          <CustomTextInput
            id="password-input"
            name="password"
            value={ password }
            type="password"
            labelName="Senha"
            testID="password-input"
            placeholder="Digite sua senha"
            handleChange={ this.handleChange }
          />
          <LoginButton isLoginBtnDisabled={ isLoginBtnDisabled } />
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Login.defaultProps = {
  history: {},
};

export default connect()(Login);
