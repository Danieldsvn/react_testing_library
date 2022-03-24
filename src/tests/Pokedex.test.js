import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';
// import Pokedex from '../components/Pokedex';
import App from '../App';

describe('Testa o funcionamento do componente <Pokedex />.js', () => {
  it('Teste se página contém um heading `h2` com o texto `Encountered pokémons`', () => {
    renderWithRouter(<App />);

    const h2 = /Encountered pokémons/i;
    const heading = screen.getByRole('heading', { level: 2, name: h2 });
    expect(heading).toBeInTheDocument();
  });
  it('É exibido o próximo Pokémon quando o botão `Próximo pokémon`é clicado', () => {
    // O botão deve conter o texto `Próximo pokémon
    // Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;
    //  O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista;
    renderWithRouter(<App />);

    const nextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(nextPokemon).toBeInTheDocument();

    const firstPokemon = screen.getByTestId(/pokemon-name/i);
    expect(firstPokemon).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pokemon2 = screen.getByTestId(/pokemon-name/i);
    expect(pokemon2).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pokemon3 = screen.getByTestId(/pokemon-name/i);
    expect(pokemon3).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pokemon4 = screen.getByTestId(/pokemon-name/i);
    expect(pokemon4).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pokemon5 = screen.getByTestId(/pokemon-name/i);
    expect(pokemon5).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pokemon6 = screen.getByTestId(/pokemon-name/i);
    expect(pokemon6).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pokemon7 = screen.getByTestId(/pokemon-name/i);
    expect(pokemon7).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pokemon8 = screen.getByTestId(/pokemon-name/i);
    expect(pokemon8).toBeInTheDocument();

    userEvent.click(nextPokemon);

    const pokemon9 = screen.getByTestId(/pokemon-name/i);
    expect(pokemon9).toBeInTheDocument();

    userEvent.click(nextPokemon);

    expect(firstPokemon).toEqual(screen.getByTestId(/pokemon-name/i));
  });
  it('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);

    const singlePokemon = screen.getAllByTestId(/pokemon-name/i);
    expect(singlePokemon).toHaveLength(1);
  });
  it('Teste se a Pokédex tem os botões de filtro.', () => {
    //  Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição.
    //  A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;
    //  O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`;
    //  O botão `All` precisa estar **sempre** visível.
    // renderWithRouter(<App />);
    // const allButtons = screen.getAllByRole((content, element) => {
    //   (element.tagName === 'button') && (content !== /Próximo pokemon/i);
    // });

    // expect(allButtons).toHaveLength(8);
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    // O texto do botão deve ser `All`;
    // A Pokedéx deverá mostrar os Pokémons normalmente (sem filtros) quando o botão `All` for clicado;
    // - Ao carregar a página, o filtro selecionado deverá ser `All`;

  });
});
