import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o funcionamento do componente <App />.js', () => {
  it('Deveria exibir um link com o texto "Home"', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
  });
  it('Deveria exibir um link com o texto "About"', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
  });
  it('Deveria exibir um link com o texto "Favorite Pokémons"', () => {
    renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favoriteLink).toBeInTheDocument();
  });
  it('Redireciona para a página inicial, na URL / ao clicar no link Home.', () => {
    const { customHistory } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();

    userEvent.click(homeLink);

    customHistory.push('/');

    const homeHeader = screen.getByRole('heading', { name: /Encountered pokémons/i });

    expect(homeHeader).toBeInTheDocument();
  });
  it('Redireciona para a URL /about, ao clicar no link About.', () => {
    const { customHistory } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);

    customHistory.push('/about');

    const aboutPokedex = screen.getByRole('heading', { name: /About Pokédex/i });

    expect(aboutPokedex).toBeInTheDocument();
  });
  it('Redireciona para a URL /favorites, ao clicar no link Favorite Pokémons.', () => {
    const { customHistory } = renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favoriteLink).toBeInTheDocument();

    userEvent.click(favoriteLink);

    customHistory.push('/favorites');

    const favoritePokemon = screen.getByRole('heading', { name: /Favorite/i });

    expect(favoritePokemon).toBeInTheDocument();
  });
  it('Redireciona para a página Not Found ao entrar em uma URL desconhecida."', () => {
    const { customHistory } = renderWithRouter(<App />);

    customHistory.push('/azeitonastropicais');

    const notFoundText = screen.getByText(/Page requested not found/i);

    expect(notFoundText).toBeInTheDocument();
  });
});
