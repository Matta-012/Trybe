import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRegister } from '../actions';

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.generateRegisters = this.generateRegisters.bind(this);
  }

  generateRegisters(array) {
    const { deleteStudent } = this.props;
    return array.map((register, idx) => (
      <div key={ register.email }>
        <p data-testid="client-name">
          Nome:
          {' '}
          {register.name}
        </p>
        <p data-testid="client-age">
          Idade:
          {' '}
          {register.age}
        </p>
        <p data-testid="client-email">
          Email:
          {' '}
          {register.email}
        </p>
        <button
          type="button"
          className="delete grow"
          data-testid={ `button-remove-${idx + 1}` }
          onClick={ () => deleteStudent(register) }
        >
          Excluir
        </button>
      </div>
    ));
  }

  render() {
    const { registers, userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1) {
      return (
        <div>
          <div className="none-client">Nenhum cliente cadastrado</div>
          <div className="link">
            <Link to="/register">Cadastre agora!</Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="link">
          <Link to="/register">Cadastre outros!</Link>
        </div>
        <div>
          {this.generateRegisters(registers)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  deleteStudent: (e) => dispatch(deleteRegister(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
