import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import { createUser } from './services/userAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userName: '',
      isLoginBtnDisabled: true,
      redirect: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { userName } = this.state;

    this.setState({ isLoggedIn: true }, async () => {
      await createUser({ name: userName });
      this.setState({ redirect: true });
    });
  };

  validateLogin = () => {
    const MIN_LENGTH = 3;
    const { userName } = this.state;

    const shouldEnable = userName.length < MIN_LENGTH;

    this.setState({ isLoginBtnDisabled: shouldEnable });
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

  render() {
    const { isLoginBtnDisabled, userName, isLoggedIn, redirect } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/search">
              <Header />
              <Search />
            </Route>
            <Route
              path="/album/:id"
              render={ (props) => (
                <>
                  <Header />
                  <Album { ...props } />
                </>
              ) }
            />
            <Route path="/favorites">
              <Header />
              <Favorites />
            </Route>
            <Route path="/profile/edit">
              <Header />
              <ProfileEdit />
            </Route>
            <Route exact path="/profile">
              <Header />
              <Profile />
            </Route>
            <Route exact path="/">
              {redirect && <Redirect to="/search" />}
              {isLoggedIn ? (
                <Loading />
              ) : (
                <Login
                  userName={ userName }
                  isLoginBtnDisabled={ isLoginBtnDisabled }
                  handleSubmit={ this.handleSubmit }
                  handleChange={ this.handleChange }
                />
              )}
            </Route>
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
