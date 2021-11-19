import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Cadastro de clientes', () => {
  test('verifica se a tela inicial é renderizada corretamente', () => {
    render(
      <App />,
    );

    expect(
      screen.getByText(/cadastro de clientes/i),
    ).toBeInTheDocument();
  });
});
