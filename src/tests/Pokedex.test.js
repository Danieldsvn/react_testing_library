import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o funcionamento do componente <Pokedex />.js', () => {
  it('Teste se página contém um heading `h2` com o texto `Encountered pokémons`', () => {
    renderWithRouter(<App />);
    const h2 = /Encountered pokémons/i;
    const heading = screen.getByRole('heading', { level: 2, name: h2 });
    expect(heading).toBeInTheDocument();
  });
  it('É exibido o próximo Pokémon quando o botão `Próximo pokémon`é clicado', () => {
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
    const dataTestId = 'data-testid';
    const ṕokeTypeButton = 'pokemon-type-button';
    const pokeType = 'pokemon-type';
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: 'All' });
    expect(allButton).toBeInTheDocument();
    let electricButton = screen.getAllByRole('button', { name: /Electric/i });
    expect(electricButton).toHaveLength(1);
    electricButton = screen.getByRole('button', { name: /Electric/i });
    expect(electricButton).toBeInTheDocument();
    expect(electricButton).toHaveAttribute(dataTestId, ṕokeTypeButton);

    userEvent.click(electricButton);

    expect(allButton).toBeInTheDocument();
    const pokemonType = screen.getByTestId(pokeType);
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(electricButton.innerHTML);
    const nextPokemonButton = screen.getByTestId('next-pokemon');
    expect(nextPokemonButton).toBeInTheDocument();
    expect(nextPokemonButton).toHaveAttribute('disabled');
    let fireButton = screen.getAllByRole('button', { name: /Fire/i });
    expect(fireButton).toHaveLength(1);
    fireButton = screen.getByRole('button', { name: /Fire/i });
    expect(fireButton).toBeInTheDocument();
    expect(fireButton).toHaveAttribute(dataTestId, ṕokeTypeButton);

    userEvent.click(fireButton);

    expect(allButton).toBeInTheDocument();
    const poke1st1 = screen.getByTestId(/pokemon-name/i);
    expect(poke1st1.innerHTML).toEqual('Charmander');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(fireButton.innerHTML);
    expect(nextPokemonButton).toBeInTheDocument();
    expect(nextPokemonButton).not.toHaveAttribute('disabled');
    userEvent.click(nextPokemonButton);
    expect(allButton).toBeInTheDocument();
    const poke2nd1 = screen.getByTestId(/pokemon-name/i);
    expect(poke2nd1.innerHTML).toEqual('Rapidash');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(fireButton.innerHTML);
    userEvent.click(nextPokemonButton);
    expect(poke1st1).toEqual(screen.getByTestId(/pokemon-name/i));
    let bugButton = screen.getAllByRole('button', { name: /Bug/i });
    expect(bugButton).toHaveLength(1);
    bugButton = screen.getByRole('button', { name: /Bug/i });
    expect(bugButton).toBeInTheDocument();
    expect(bugButton).toHaveAttribute(dataTestId, ṕokeTypeButton);

    userEvent.click(bugButton);

    expect(allButton).toBeInTheDocument();
    const poke1st2 = screen.getByTestId(/pokemon-name/i);
    expect(poke1st2.innerHTML).toEqual('Caterpie');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(bugButton.innerHTML);
    expect(nextPokemonButton).toBeInTheDocument();
    expect(nextPokemonButton).toHaveAttribute('disabled');
    let poisonButton = screen.getAllByRole('button', { name: /Poison/i });
    expect(poisonButton).toHaveLength(1);
    poisonButton = screen.getByRole('button', { name: /Poison/i });
    expect(poisonButton).toBeInTheDocument();
    expect(poisonButton).toHaveAttribute(dataTestId, ṕokeTypeButton);

    userEvent.click(poisonButton);

    expect(allButton).toBeInTheDocument();
    const poke1st3 = screen.getByTestId(/pokemon-name/i);
    expect(poke1st3.innerHTML).toEqual('Ekans');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(poisonButton.innerHTML);
    expect(nextPokemonButton).toBeInTheDocument();
    expect(nextPokemonButton).toHaveAttribute('disabled');
    let psychicButton = screen.getAllByRole('button', { name: /Psychic/i });
    expect(psychicButton).toHaveLength(1);
    psychicButton = screen.getByRole('button', { name: /Psychic/i });
    expect(psychicButton).toBeInTheDocument();
    expect(psychicButton).toHaveAttribute(dataTestId, ṕokeTypeButton);

    userEvent.click(psychicButton);

    expect(allButton).toBeInTheDocument();
    const poke1st4 = screen.getByTestId(/pokemon-name/i);
    expect(poke1st4.innerHTML).toEqual('Alakazam');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(psychicButton.innerHTML);
    expect(nextPokemonButton).toBeInTheDocument();
    expect(nextPokemonButton).not.toHaveAttribute('disabled');
    userEvent.click(nextPokemonButton);
    expect(allButton).toBeInTheDocument();
    const poke2nd4 = screen.getByTestId(/pokemon-name/i);
    expect(poke2nd4.innerHTML).toEqual('Mew');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(psychicButton.innerHTML);
    userEvent.click(nextPokemonButton);
    expect(poke1st4).toEqual(screen.getByTestId(/pokemon-name/i));
    let normalButton = screen.getAllByRole('button', { name: /Normal/i });
    expect(normalButton).toHaveLength(1);
    normalButton = screen.getByRole('button', { name: /Normal/i });
    expect(normalButton).toBeInTheDocument();
    expect(normalButton).toHaveAttribute(dataTestId, ṕokeTypeButton);

    userEvent.click(normalButton);

    expect(allButton).toBeInTheDocument();
    const poke1st5 = screen.getByTestId(/pokemon-name/i);
    expect(poke1st5.innerHTML).toEqual('Snorlax');

    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(normalButton.innerHTML);
    expect(nextPokemonButton).toBeInTheDocument();
    expect(nextPokemonButton).toHaveAttribute('disabled');
    let dragonButton = screen.getAllByRole('button', { name: /Dragon/i });
    expect(dragonButton).toHaveLength(1);
    dragonButton = screen.getByRole('button', { name: /Dragon/i });
    expect(dragonButton).toBeInTheDocument();
    expect(dragonButton).toHaveAttribute(dataTestId, ṕokeTypeButton);

    userEvent.click(dragonButton);

    expect(allButton).toBeInTheDocument();
    const poke1st6 = screen.getByTestId(/pokemon-name/i);
    expect(poke1st6.innerHTML).toEqual('Dragonair');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toEqual(dragonButton.innerHTML);
    expect(nextPokemonButton).toBeInTheDocument();
    expect(nextPokemonButton).toHaveAttribute('disabled');
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const pokeType = 'pokemon-type';
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: 'All' });
    expect(allButton.innerHTML).toEqual('All');

    userEvent.click(allButton);

    const nextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(nextPokemon).toBeInTheDocument();

    const firstPokemon = screen.getByTestId(pokeType);
    expect(firstPokemon).toBeInTheDocument();
    const poke1stType = firstPokemon.innerHTML;

    userEvent.click(nextPokemon);
    const pokemon2 = screen.getByTestId(pokeType);
    expect(pokemon2).toBeInTheDocument();
    const poke2ndType = pokemon2.innerHTML;
    expect(poke1stType).not.toEqual(poke2ndType);

    userEvent.click(nextPokemon);
    const pokemon3 = screen.getByTestId(pokeType);
    expect(pokemon3).toBeInTheDocument();
    const poke3rdType = pokemon3.innerHTML;
    expect(poke2ndType).not.toEqual(poke3rdType);

    userEvent.click(nextPokemon);
    const pokemon4 = screen.getByTestId(pokeType);
    expect(pokemon4).toBeInTheDocument();

    userEvent.click(nextPokemon);
    const pokemon5 = screen.getByTestId(pokeType);
    expect(pokemon5).toBeInTheDocument();

    userEvent.click(nextPokemon);
    const pokemon6 = screen.getByTestId(pokeType);
    expect(pokemon6).toBeInTheDocument();

    userEvent.click(nextPokemon);
    const pokemon7 = screen.getByTestId(pokeType);
    expect(pokemon7).toBeInTheDocument();

    userEvent.click(nextPokemon);
    const pokemon8 = screen.getByTestId(pokeType);
    expect(pokemon8).toBeInTheDocument();

    userEvent.click(nextPokemon);
    const pokemon9 = screen.getByTestId(pokeType);
    expect(pokemon9).toBeInTheDocument();

    userEvent.click(nextPokemon);
    expect(firstPokemon).toEqual(screen.getByTestId(pokeType));
  });
});
