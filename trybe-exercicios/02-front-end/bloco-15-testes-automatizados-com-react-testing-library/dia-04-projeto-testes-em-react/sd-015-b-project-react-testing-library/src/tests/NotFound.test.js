import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Testa o componente <NotFound.js />', () => {
  it(`Testa se a página contém um heading h2 com o texto
    "Page requested not found 😭"`, () => {
    render(<NotFound />);

    const titleEl = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i,
    });
    const emojiEl = screen.getByLabelText(/Crying emoji/i);
    expect(emojiEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });

  it('Testa se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);

    const imgEl = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );
    expect(imgEl.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
