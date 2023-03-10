import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

const aboutText1 = /This application simulates a Pokédex/gi;
const aboutText2 = /One can filter Pokémons by type/gi;

describe('Testa o funcionamento do componente <About />.js', () => {
  it('Testa se a página contém as informações sobre a Pokédex.', () => {
    renderWithRouter(<About />);

    const text1 = screen.getByText(aboutText1);
    expect(text1).toBeInTheDocument();
    const text2 = screen.getByText(aboutText2);
    expect(text2).toBeInTheDocument();
  });
  it('Testa se a página contém um heading `h2` com o texto `About Pokédex`', () => {
    renderWithRouter(<About />);

    const h2Text = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(h2Text).toBeInTheDocument();
  });
  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);

    const pQuantity = screen.getAllByText((_content, e) => e.tagName === 'P');
    expect(pQuantity).toHaveLength(2);
  });
  it('Testa se a página contém a seguinte imagem de uma Pokédex com a Url', () => {
    renderWithRouter(<About />);

    const urlPokedexImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const pokedex = screen.getByRole('img');
    expect(pokedex).toHaveAttribute('src', `${urlPokedexImg}`);
  });
});
