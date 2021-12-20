import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import data from '../data';

const pokemonName = 'pokemon-name';

describe('Testa o componente <Pokedex.js />', () => {
  it('Testa se página contém um heading h2 com o texto Encountered pokémons', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const titleEl = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(titleEl).toBeInTheDocument();
  });

  it(`Testa se é exibido o próximo Pokémon da 
  lista quando o botão Próximo pokémon é clicado`, () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const nextPokeBtnEl = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    const pikachu = screen.getByTestId(pokemonName);
    expect(nextPokeBtnEl).toBeInTheDocument();
    expect(pikachu).toHaveTextContent('Pikachu');

    data.forEach((pokemon, index) => {
      const curentPokemon = screen.getAllByTestId(pokemonName);
      expect(curentPokemon[0]).toHaveTextContent(pokemon.name);
      expect(curentPokemon).toHaveLength(1);
      userEvent.click(nextPokeBtnEl);

      if (index === data.length - 1) {
        expect(curentPokemon[0]).toHaveTextContent('Pikachu');
      }
    });
  });

  it('Testa se é mostrado apenas um Pokémon por vez', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const curentPokemon = screen.getAllByText('Pikachu');
    expect(curentPokemon).toHaveLength(1);
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const pokemonTypes = [
      'Electric',
      'Fire',
      'Bug',
      'Poison',
      'Psychic',
      'Normal',
      'Dragon',
    ];

    const allBtnEl = screen.getByRole('button', { name: 'All' });
    const typeButtonsEl = screen.getAllByTestId('pokemon-type-button');

    pokemonTypes.forEach((type, index) => {
      expect(typeButtonsEl).toHaveLength(pokemonTypes.length);
      expect(typeButtonsEl[index].innerHTML).toBe(type);
      userEvent.click(typeButtonsEl[index]);
      expect(allBtnEl).toBeInTheDocument();
    });

    const fireBtnEl = screen.getByRole('button', { name: 'Fire' });
    const nextPokeBtnEl = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(fireBtnEl);

    let charmander = screen.getByTestId(pokemonName);
    expect(charmander).toHaveTextContent('Charmander');
    userEvent.click(nextPokeBtnEl);
    const rapidash = screen.getByTestId(pokemonName);
    expect(rapidash).toHaveTextContent('Rapidash');
    userEvent.click(nextPokeBtnEl);
    charmander = screen.getByTestId(pokemonName);
    expect(charmander).toHaveTextContent('Charmander');
  });

  it('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const nextPokeBtnEl = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    const allBtnEl = screen.getByRole('button', { name: 'All' });
    const fireBtnEl = screen.getByRole('button', { name: 'Fire' });
    expect(allBtnEl.innerHTML).toBe('All');

    let currentPokemon = screen.getByTestId(pokemonName);
    expect(currentPokemon).toHaveTextContent('Pikachu');
    userEvent.click(nextPokeBtnEl);
    currentPokemon = screen.getByTestId(pokemonName);
    expect(currentPokemon).toHaveTextContent('Charmander');

    userEvent.click(fireBtnEl);

    currentPokemon = screen.getByTestId(pokemonName);
    expect(currentPokemon).toHaveTextContent('Charmander');
    userEvent.click(nextPokeBtnEl);
    currentPokemon = screen.getByTestId(pokemonName);
    expect(currentPokemon).toHaveTextContent('Rapidash');

    userEvent.click(allBtnEl);

    data.forEach((pokemon, index) => {
      const curentPokemon = screen.getByTestId(pokemonName);
      expect(curentPokemon).toHaveTextContent(pokemon.name);
      userEvent.click(nextPokeBtnEl);

      if (index === data.length - 1) {
        expect(curentPokemon).toHaveTextContent('Pikachu');
      }
    });
  });
});
