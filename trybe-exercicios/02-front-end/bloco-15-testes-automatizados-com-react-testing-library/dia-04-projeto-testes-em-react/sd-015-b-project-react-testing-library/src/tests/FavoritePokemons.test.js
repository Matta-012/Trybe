import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa o componente <FavoritePokemons.js />', () => {
  it(`Testa se é exibido na tela a mensagem "No favorite pokemon found",
    se a pessoa não tiver pokémons favoritos`, () => {
    render(<FavoritePokemons />);
    const textEl = screen.getByText(/No favorite pokemon found/i);

    expect(textEl).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);
    const detailEl = screen.getByRole('link', { name: /more details/i });
    expect(detailEl).toBeInTheDocument();

    userEvent.click(detailEl);
    const pikachuDetails = screen.getByRole('heading', {
      level: 2,
      name: /pikachu details/i,
    });
    expect(pikachuDetails).toBeInTheDocument();

    const favoriteEl = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(favoriteEl).toBeInTheDocument();
    userEvent.click(favoriteEl);

    const favPokemonsEl = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favPokemonsEl).toBeInTheDocument();
    userEvent.click(favPokemonsEl);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
    const pokeName = screen.getByTestId('pokemon-name');
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeWeight = screen.getByTestId('pokemon-weight');
    expect(pokeName).toBeInTheDocument();
    expect(pokeType).toBeInTheDocument();
    expect(pokeWeight).toBeInTheDocument();
  });
});
