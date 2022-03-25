import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';

import App from '../App';

const moreDetailsText = 'More details';
const moreDetailsPath = '/pokemons/25';
describe('Testa o funcionamento do componente <Pokemon />.js', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
    const imgUrl = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const altAttribute = 'Pikachu sprite';
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName.innerHTML).toEqual('Pikachu');
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.innerHTML).toEqual('Electric');
    const pokemonWeigth = screen.getByTestId('pokemon-weight');
    expect(pokemonWeigth.innerHTML).toEqual('Average weight: 6.0 kg');
    const pokemonImg = screen.getByRole('img');
    expect(pokemonImg).toHaveAttribute('src', imgUrl);
    expect(pokemonImg).toHaveAttribute('alt', altAttribute);
  });
  it('Teste o botao "More details" tem URL /pokemons/<id>. <id> = Pokemon id', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsText });
    expect(moreDetails).toHaveAttribute('href', moreDetailsPath);
  });
  it('Clicar em "More details", leva até a página de detalhes do Pokémon', () => {
    const { customHistory } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsText });
    expect(moreDetails).toHaveAttribute('href', moreDetailsPath);

    userEvent.click(moreDetails);

    customHistory.push(moreDetailsPath);

    const pokemonDetails = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(pokemonDetails).toBeInTheDocument();
  });
  it('Teste se a URL no navegador muda para /pokemon/<id>. <id> = id do Pokémon', () => {
    const { customHistory } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsText });
    expect(moreDetails).toHaveAttribute('href', moreDetailsPath);

    userEvent.click(moreDetails);

    customHistory.push(moreDetailsPath);

    expect(customHistory.location.pathname).toEqual(moreDetailsPath);
  });
  it('- Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    const { customHistory } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsText });
    expect(moreDetails).toHaveAttribute('href', moreDetailsPath);

    userEvent.click(moreDetails);

    customHistory.push(moreDetailsPath);

    const checkbox = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBeFalsy();

    userEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();

    const favStar = screen.getByRole((_content, e) => e.className === 'favorite-icon');
    expect(favStar).toHaveAttribute('alt', 'Pikachu is marked as favorite');
    expect(favStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
