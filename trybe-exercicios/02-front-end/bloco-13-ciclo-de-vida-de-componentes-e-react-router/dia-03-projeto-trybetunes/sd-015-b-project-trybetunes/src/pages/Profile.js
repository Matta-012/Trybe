import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      userInfo: {},
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    this.setState({ isLoading: true }, async () => {
      const userData = await getUser();
      this.setState({
        userInfo: { ...userData },
        isLoading: false,
      });
    });
  };

  render() {
    const { isLoading, userInfo } = this.state;
    const userData = (
      <div className="container ">
        <div>
          <div>
            <img
              data-testid="profile-image"
              src={ userInfo.image }
              alt={ userInfo.image ? userInfo.name : 'Sem Imagem' }
            />
          </div>
          <Link to="/profile/edit">Editar perfil</Link>
        </div>
        <div>
          <div>
            Nome
            <p>{userInfo.name}</p>
          </div>
          <div>
            Email
            <p>{userInfo.email}</p>
          </div>
          <div>
            Descrição
            <p>{userInfo.description}</p>
          </div>
        </div>
      </div>
    );
    return (
      <div data-testid="page-profile">
        {isLoading ? <Loading /> : userData}
      </div>
    );
  }
}

export default Profile;
