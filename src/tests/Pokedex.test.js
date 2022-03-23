import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import Pokedex from '../components/Pokedex';
import App from '../App';

describe('Testa o funcionamento do componente <Pokedex />.js', () => {
  it('Teste se página contém um heading `h2` com o texto `Encountered pokémons`', () => {
    renderWithRouter(<App />);      

    const heading = screen.getByRole('heading',{ level: 2, name: /Encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo Pokémon da lista quando o botão `Próximo pokémon` é clicado', () => {
    // O botão deve conter o texto `Próximo pokémon
    // Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;
    //  O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista;
    renderWithRouter(<App />);

    
    const nextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(nextPokemon).toBeInTheDocument();
  });
//   it('Teste se é mostrado apenas um Pokémon por vez', () => {    
//     //  Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição.
//     //  A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;
//     //  O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`;
//     //  O botão `All` precisa estar **sempre** visível.

//     renderWithRouter(<Pokedex />);

//     const noFavorite = screen.getByText(/No favorite pokemon found/i);
//     expect(noFavorite).toBeInTheDocument();
//   });  
//   it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
//     // O texto do botão deve ser `All`;
//     // A Pokedéx deverá mostrar os Pokémons normalmente (sem filtros) quando o botão `All` for clicado;
//     // - Ao carregar a página, o filtro selecionado deverá ser `All`;
    
//     const { customHistory } = renderWithRouter(<App />);

//     const moreDetails = screen.getByRole('link', { name: /More details/i });
//     expect(moreDetails).toBeInTheDocument();

//     userEvent.click(moreDetails);

//     customHistory.push('/pokemons/25');

//     const checkbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
//     expect(checkbox).toBeInTheDocument();
//     expect(checkbox.checked).toBeFalsy();

//     userEvent.click(checkbox);
//     expect(checkbox.checked).toBeTruthy();

//     const yellowStar = screen.getAllByRole('img');
//     expect(yellowStar[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');

//     const homeLink = screen.getByRole('link', { name: /Home/i });
//     expect(homeLink).toBeInTheDocument();
//     userEvent.click(homeLink);

//     customHistory.push('/');
//     const fireButton = screen.getByRole('button', { name: /Fire/i });
//     expect(fireButton).toBeInTheDocument();

//     userEvent.click(fireButton);

//     const charmander = screen.getByText(/Charmander/i);
//     expect(charmander).toBeInTheDocument();

//     userEvent.click(moreDetails);

//     customHistory.push('/pokemons/4');

//     const checkbox2 = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
//     expect(checkbox2).toBeInTheDocument();
//     expect(checkbox2.checked).toBeFalsy();

//     userEvent.click(checkbox2);
//     expect(checkbox2.checked).toBeTruthy();

//     const yellowStar2 = screen.getAllByRole('img');
//     expect(yellowStar2[1]).toHaveAttribute('alt', 'Charmander is marked as favorite');

//     const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
//     expect(favoriteLink).toBeInTheDocument();

//     userEvent.click(favoriteLink);

//     customHistory.push('/favorites');

//     const Pokedex = screen.getAllByRole('link', { name: /More details/i });
//     expect(Pokedex).toHaveLength(2);
//   });
});
