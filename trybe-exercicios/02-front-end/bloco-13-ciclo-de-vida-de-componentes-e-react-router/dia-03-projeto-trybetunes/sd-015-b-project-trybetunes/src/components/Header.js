import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      userName: '',
    };
  }

  componentDidMount() {
    this.getUserName();
  }

  getUserName = () => {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({
        loading: false,
        userName: user.name,
      });
    });
  };

  renderHeader = () => {
    const { loading, userName } = this.state;
    return loading
      ? <Loading />
      : <h3 data-testid="header-user-name" className="text-end">{userName}</h3>;
  }

  render() {
    return (
      <header data-testid="header-component">
        <nav className="container d-flex justify-content-between flex-wrap">
          <li>
            <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
          </li>
          <li>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
          </li>
          <li>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
          </li>
          {this.renderHeader()}
        </nav>
      </header>
    );
  }
}

export default Header;
