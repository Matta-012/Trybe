import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import data from '../data';

const pokemonName = 'pokemon-name';
const pokemonType = 'pokemon-type';
const pokemonWeight = 'pokemon-weight';

describe('Testa o componente <Pokemon.js />', () => {
  it('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    const pokemonNameEl = screen.getByTestId(pokemonName);
    const pokemonTypeEl = screen.getByTestId(pokemonType);
    const pokemonWeightEl = screen.getByTestId(pokemonWeight);
    const pokemonImgEl = screen.getByRole('img');

    expect(pokemonNameEl).toHaveTextContent(data[0].name);
    expect(pokemonTypeEl).toHaveTextContent(data[0].type);
    expect(pokemonWeightEl).toHaveTextContent(
      `${data[0].averageWeight.value} ${data[0].averageWeight.measurementUnit}`,
    );
    expect(pokemonImgEl).toBeInTheDocument();
    expect(pokemonImgEl.src).toBe(data[0].image);
    expect(pokemonImgEl.alt).toBe(`${data[0].name} sprite`);
  });

  it(`Testa se o card do Pokémon indicado na Pokédex contém um link
    de navegação para exibir detalhes deste Pokémon. O link 
    deve possuir a URL /pokemons/<id>, onde <id> é o id do Pokémon exibido`, () => {
    renderWithRouter(<App />);

    const moreDetailsEl = screen.getByRole('link', { name: /more details/i });
    expect(moreDetailsEl).toBeInTheDocument();
    expect(moreDetailsEl.href).toBe(`http://localhost/pokemons/${data[0].id}`);
  });

  it(`Testa se ao clicar no link de navegação do Pokémon, é feito o 
  redirecionamento da aplicação para a página de detalhes de Pokémon`, () => {
    const { history } = renderWithRouter(<App />);

    const moreDetailsEl = screen.getByRole('link', { name: /more details/i });
    expect(moreDetailsEl).toBeInTheDocument();
    userEvent.click(moreDetailsEl);
    const { location: { pathname } } = history;

    expect(pathname).not.toBe('/');
  });

  it(`Testa também se a URL exibida no navegador muda para "/pokemon/<id>",
  onde <id> é o id do Pokémon cujos detalhes se deseja ver`, () => {
    const { history } = renderWithRouter(<App />);

    const moreDetailsEl = screen.getByRole('link', { name: /more details/i });
    expect(moreDetailsEl).toBeInTheDocument();
    userEvent.click(moreDetailsEl);
    const { location: { pathname } } = history;

    expect(pathname).toBe(`/pokemons/${data[0].id}`);
  });

  it('Testa se existe um ícone de estrela nos Pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const moreDetailsEl = screen.getByRole('link', { name: /more details/i });
    expect(moreDetailsEl).toBeInTheDocument();
    userEvent.click(moreDetailsEl);
    const { location: { pathname } } = history;
    expect(pathname).toBe(`/pokemons/${data[0].id}`);

    let favIconEl = screen.queryByAltText(`${data[0].name} is marked as favorite`);
    expect(favIconEl).not.toBeInTheDocument();
    const favoriteEl = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(favoriteEl);
    favIconEl = screen.getByAltText(`${data[0].name} is marked as favorite`);
    expect(favIconEl).toBeInTheDocument();
    expect(favIconEl.src).toBe('http://localhost/star-icon.svg');
    expect(favIconEl.alt).toBe(`${data[0].name} is marked as favorite`);
  });
});
