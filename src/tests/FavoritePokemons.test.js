import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Testa o funcionamento do componente <FavoritePokemons />.js', () => {
  it('Sem pokemons favoritos, exiba na tela `No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });
  it(' Teste se é exibido todos os cards de pokémons favoritados`', () => {
    const { customHistory } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    customHistory.push('/pokemons/25');

    const checkbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBeFalsy();

    userEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();

    const yellowStar = screen.getAllByRole('img');
    expect(yellowStar[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');

    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);

    customHistory.push('/');
    const fireButton = screen.getByRole('button', { name: /Fire/i });
    expect(fireButton).toBeInTheDocument();

    userEvent.click(fireButton);

    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();

    userEvent.click(moreDetails);

    customHistory.push('/pokemons/4');

    const checkbox2 = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    expect(checkbox2).toBeInTheDocument();
    expect(checkbox2.checked).toBeFalsy();

    userEvent.click(checkbox2);
    expect(checkbox2.checked).toBeTruthy();

    const yellowStar2 = screen.getAllByRole('img');
    expect(yellowStar2[1]).toHaveAttribute('alt', 'Charmander is marked as favorite');

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favoriteLink).toBeInTheDocument();

    userEvent.click(favoriteLink);

    customHistory.push('/favorites');

    const favoritePokemons = screen.getAllByRole('link', { name: /More details/i });
    expect(favoritePokemons).toHaveLength(2);
  });
});
