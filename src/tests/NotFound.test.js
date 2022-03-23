import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testa o funcionamento do componente <NotFound />.js', () => {
  it('Teste se existe um heading `h2` com o texto `Page requested not found 😭`', () => {
    renderWithRouter(<NotFound />);
    const text = /Page requested not found/i;
    const h2 = screen.getByRole('heading', { level: 2, name: text });
    expect(h2).toBeInTheDocument();

    const allImgs = screen.getAllByRole('img');
    const emoji = allImgs[0];
    expect(emoji).toHaveAttribute('aria-label', 'Crying emoji');
  });
  it('Teste se existe a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`', () => {
    renderWithRouter(<NotFound />);

    const allImgs = screen.getAllByRole('img');
    const notFoundImg = allImgs[1];
    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
