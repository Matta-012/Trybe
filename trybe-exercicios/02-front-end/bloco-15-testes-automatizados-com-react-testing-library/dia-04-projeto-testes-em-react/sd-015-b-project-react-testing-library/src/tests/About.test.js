import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('Testa o componente <About.js />', () => {
  it('Testa se a página contém as informações sobre a Pokédex', () => {
    render(<About />);

    const titleEl = screen.getByRole('heading', {
      level: 2,
      name: /about pokédex/i,
    });
    const paragraphEl = screen.getAllByText(/pokémons/i);
    const pokedexImgEl = screen.getByRole('img');

    expect(titleEl).toBeInTheDocument();
    expect(paragraphEl).toHaveLength(2);
    expect(pokedexImgEl).toBeInTheDocument();
  });

  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);

    const titleEl = screen.getByRole('heading', {
      level: 2,
      name: /about pokédex/i,
    });

    expect(titleEl).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<About />);

    const paragraphEl = screen.getAllByText(/pokémons/i);

    expect(paragraphEl).toHaveLength(2);
  });

  it('Testa se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About />);

    const pokedexImgEl = screen.getByRole('img');

    expect(pokedexImgEl.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
