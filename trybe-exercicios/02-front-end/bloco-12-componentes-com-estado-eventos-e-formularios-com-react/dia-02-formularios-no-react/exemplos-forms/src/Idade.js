import React, { Component } from "react";

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (!value.length) error = 'Campo obrigatório!';

    return (
      <>
        <input
              type="number"
              name="idade"
              value={value}
              onChange={handleChange}
        />
        <span>{ error ? error : '' }</span>
      </>
    );
  }
}

export default Idade;