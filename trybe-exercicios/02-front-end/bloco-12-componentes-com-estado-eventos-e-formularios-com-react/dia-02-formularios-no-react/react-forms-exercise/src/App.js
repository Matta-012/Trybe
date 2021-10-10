import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import FormError from './components/FormError';
import FormDataDisplay from './components/FormDataDisplay';
import MyName from './components/MyName';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true })
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = () => { this.setState(INITIAL_STATE) };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          handleSubmit={this.handleSubmit}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={ this.state }
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
        <MyName name={this.state.name} changeHandler={ this.changeHandler }>
          <p>Children props</p>
        </MyName>
      </main>
    );
  }
}

export default App;