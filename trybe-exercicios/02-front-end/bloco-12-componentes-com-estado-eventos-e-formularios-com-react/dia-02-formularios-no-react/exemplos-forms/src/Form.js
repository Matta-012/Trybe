import React, { Component } from "react";
import EstadoFavorito from "./EstadoFavorito";
import Idade from "./Idade";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: "",
      idade: "",
      vaiComparecer: false,
      frutaPreferida: "lime",
      formComErros: true,
    };
  }

  handleErrors() {
    const { estadoFavorito, idade } = this.state;

    const errorCases = [
      !estadoFavorito.length || estadoFavorito.length > 20,
      !idade.length,
    ];

    const formPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formComErros: !formPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleErrors();
      }
    );
  }

  render() {
    const { formComErros } = this.state;
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <fieldset>
            <legend>Infos</legend>
            <EstadoFavorito
              value={this.state.estadoFavorito}
              handleChange={this.handleChange}
            />
            <Idade value={this.state.idade} handleChange={this.handleChange} />
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
            <select
              name="frutaPreferida"
              value={this.state.frutaPreferida}
              onChange={this.handleChange}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </fieldset>
          <input type="file" />
        </form>
        {formComErros ? (
          <span style={{ color: "red" }}>Preencha todos os campos</span>
        ) : (
          <span style={{ color: "green" }}>Todos campos foram preenchidos</span>
        )}
      </div>
    );
  }
}

export default Form;
