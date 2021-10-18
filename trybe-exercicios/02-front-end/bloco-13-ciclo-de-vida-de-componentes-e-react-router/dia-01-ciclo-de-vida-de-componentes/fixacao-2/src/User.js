import React, { Component } from 'react'

export class User extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: true,
      userObj: [],
    }
  }

  async fetchAPI() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
      const apiResponse = await fetch('https://api.randomuser.me/');
      const reponseObj = await apiResponse.json();
      this.setState({
        loading: false,
        userObj: reponseObj.results,
      });
    });
  }
  
  componentDidMount() {
    this.fetchAPI();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState);
    const AGE = 50;

    if (nextState.userObj[0].dob.age > AGE) return false;

    return true;
  }

  render() {
    const { loading, userObj } = this.state;

    if (loading) return <p>Loading...</p>;
    return (
      <div>
        {userObj.map((user, index) => (
          <div key={index}>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <div>
              <img src={user.picture.large} alt={user.name.first} />
            </div>
            <p>{user.email}</p>
            <p>{user.dob.age}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default User

