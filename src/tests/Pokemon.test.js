import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import Pokemon from '../components/Pokemons';
import App from '../App';

describe('Testa o funcionamento do componente <Pokemon />.js', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
    // - O nome correto do Pokémon deve ser mostrado na tela;

    // - O tipo correto do pokémon deve ser mostrado na tela.

    // - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida.

    // - A imagem do Pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon;   

    
  });
  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do Pokémon exibido;', () => {
    
  });
  it('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon. ', () => {
   
  });
  it('- Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do Pokémon cujos detalhes se deseja ver;', () => {
   
  });
  it('- Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {     
    // - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;
    // - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do Pokémon exibido.
    
  });
});

