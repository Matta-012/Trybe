import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa o componente <App.js />', () => {
  it('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);

    const homeLinkEl = screen.getByRole('link', { name: /home/i });
    const aboutLinkEl = screen.getByRole('link', { name: /about/i });
    const favPokemonLinkEl = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });

    expect(homeLinkEl).toBeInTheDocument();
    expect(aboutLinkEl).toBeInTheDocument();
    expect(favPokemonLinkEl).toBeInTheDocument();
  });

  it(`Testa se a aplicação é redirecionada para a página inicial, 
    na URL "/" ao clicar no link Home da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);

    const homeLinkEl = screen.getByRole('link', { name: /home/i });
    expect(homeLinkEl).toBeInTheDocument();
    userEvent.click(homeLinkEl);

    const {
      location: { pathname },
    } = history;
    expect(pathname).toBe('/');
  });

  it(`Testa se a aplicação é redirecionada para a página de About, na URL "/about", 
    ao clicar no link About da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);

    const aboutLinkEl = screen.getByRole('link', { name: /about/i });
    expect(aboutLinkEl).toBeInTheDocument();
    userEvent.click(aboutLinkEl);

    const {
      location: { pathname },
    } = history;
    expect(pathname).toBe('/about');
  });

  it(`Testa se a aplicação é redirecionada para a página de Pokémons Favoritados, na 
    URL "/favorites", ao clicar no link Favorite Pokémons da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);

    const favPokemonLinkEl = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });
    expect(favPokemonLinkEl).toBeInTheDocument();
    userEvent.click(favPokemonLinkEl);

    const {
      location: { pathname },
    } = history;
    expect(pathname).toBe('/favorites');
  });

  it(`Testa se a aplicação é redirecionada para a página 
    Not Found ao entrar em uma URL desconhecida`, () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina-inexiste-xablau');

    const notFoundTitleEl = screen.getByRole('heading', {
      level: 2,
      name: /page requested not found/i,
    });

    expect(notFoundTitleEl).toBeInTheDocument();
  });
});
