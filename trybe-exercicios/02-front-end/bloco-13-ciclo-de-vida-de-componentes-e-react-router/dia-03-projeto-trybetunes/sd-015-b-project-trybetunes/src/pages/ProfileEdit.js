import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import ProfileForm from '../components/ProfileForm';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isLoginBtnDisabled: true,
      name: '',
      email: '',
      description: '',
      image: '',
      redirect: false,
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  isEmailValid = (email) => {
    const regex = /^\S+@\S+\.\S+$/;

    return regex.test(email);
  };

  validateLogin = () => {
    const stateEntries = Object.entries(this.state);
    const excludedKeys = ['isLoading', 'isLoginBtnDisabled', 'redirect'];

    const filterStates = stateEntries.filter(
      (state) => !excludedKeys.includes(state[0]),
    );

    const shouldEnable = filterStates.every((state) => (
      state[0] === 'email' ? this.isEmailValid(state[1]) : state[1]
    ));

    this.setState({ isLoginBtnDisabled: !shouldEnable });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState(
      {
        [name]: value,
      },
      this.validateLogin,
    );
  };

  getUserData = () => {
    this.setState({ isLoading: true }, async () => {
      const userData = await getUser();
      this.setState({
        name: userData.name,
        email: userData.email,
        description: userData.description,
        image: userData.image,
        isLoading: false,
      }, this.validateLogin);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, description, image } = this.state;

    const userData = { name, email, description, image };

    this.setState({ isLoading: true }, async () => {
      await updateUser(userData);
      this.setState({
        isLoading: false,
        redirect: true,
      });
    });
  };

  render() {
    const {
      isLoading,
      name,
      email,
      description,
      image,
      isLoginBtnDisabled,
      redirect,
    } = this.state;
    return (
      <div data-testid="page-profile-edit">
        {isLoading ? (
          <Loading />
        ) : (
          <ProfileForm
            name={ name }
            email={ email }
            description={ description }
            image={ image }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            isLoginBtnDisabled={ isLoginBtnDisabled }
          />
        )}
        {redirect && <Redirect exact to="/profile" />}
      </div>
    );
  }
}

export default ProfileEdit;
