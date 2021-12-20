import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import data from '../data';

describe('Testa o componente <PokemonDetails.js />', () => {
  beforeEach(() => {
    renderWithRouter(<App />);

    const moreDetailsEl = screen.getByRole('link', { name: /more details/i });
    expect(moreDetailsEl).toBeInTheDocument();
    userEvent.click(moreDetailsEl);
    expect(moreDetailsEl).not.toBeInTheDocument();
  });

  it(`Testa se as informações detalhadas do Pokémon
  selecionado são mostradas na tela`, () => {
    const detailsTitleEl = screen.getByRole('heading', {
      name: `${data[0].name} Details`,
      level: 2,
    });
    expect(detailsTitleEl).toBeInTheDocument();

    const summaryTitleEl = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(summaryTitleEl).toBeInTheDocument();

    const pokemonDescriptionEl = screen.getByText(data[0].summary);
    expect(pokemonDescriptionEl).toBeInTheDocument();
  });

  it(`Testa se existe na página uma seção com os
  mapas contendo as localizações do pokémon`, () => {
    const locationTitleEl = screen.getByRole('heading', {
      name: `Game Locations of ${data[0].name}`,
      level: 2,
    });
    expect(locationTitleEl).toBeInTheDocument();

    const locationImgEl = screen.getAllByAltText(`${data[0].name} location`);
    expect(locationImgEl).toHaveLength(2);

    data[0].foundAt.forEach(({ location, map }, index) => {
      const locationEl = screen.getByText(location);
      expect(locationEl).toBeInTheDocument();

      expect(locationImgEl[index].src).toBe(map);
      expect(locationImgEl[index].alt).toBe(`${data[0].name} location`);
    });
  });

  it('Testa se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    const favoriteEl = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(favoriteEl).toBeInTheDocument();

    let favIconEl = screen.queryByAltText(`${data[0].name} is marked as favorite`);
    expect(favIconEl).not.toBeInTheDocument();
    userEvent.click(favoriteEl);
    favIconEl = screen.getByAltText(`${data[0].name} is marked as favorite`);
    expect(favIconEl).toBeInTheDocument();
    expect(favIconEl.src).toBe('http://localhost/star-icon.svg');
    expect(favIconEl.alt).toBe(`${data[0].name} is marked as favorite`);
    userEvent.click(favoriteEl);
    expect(favIconEl).not.toBeInTheDocument();
  });
});
