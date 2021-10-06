import React, { Component } from 'react';
import data from '../data';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <section className="card-container">
        {data.map((poke) => <Pokemon key={poke.id} pokemon={poke}/>)}
      </section>
    );
  }
}

export default Pokedex;