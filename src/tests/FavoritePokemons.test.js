import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App'

describe('Testa o funcionamento do componente <FavoritePokemons />.js', () => {
    it(' Teste se é exibido na tela a mensagem `No favorite pokemon found`, se a pessoa não tiver pokémons favoritos.', () => {
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

    const favoriteCheckbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i})
    expect(favoriteCheckbox).toBeInTheDocument(); 
    expect(favoriteCheckbox.checked).toBeFalsy();

    userEvent.click(favoriteCheckbox);    
    expect(favoriteCheckbox.checked).toBeTruthy();

    const yellowStar = screen.getAllByRole('img')
    expect(yellowStar[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');

    const homeLink = screen.getByRole('link', { name: /Home/i})
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);



  
    //   const h2Text = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    //   expect(h2Text).toBeInTheDocument();
    });
});   