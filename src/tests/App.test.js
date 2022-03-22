import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import renderWithRouter from "./renderWithRouter";
import App from '../App'
import { useReducer } from "react/cjs/react.production.min";

describe('Testa o funcionamento do componente <App />.js', () => {
  it('Deveria exibir um link com o texto "Home"', () => {
    renderWithRouter(<App />)

    const homeLink = screen.getByRole('link', { name: /Home/i })
    expect(homeLink).toBeInTheDocument();
  });  
  it('Deveria exibir um link com o texto "About"', () => {
    renderWithRouter(<App />)

    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
  });
  it('Deveria exibir um link com o texto "Favorite Pokémons"', () => {
    renderWithRouter(<App />)

    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i })
    expect(favoriteLink).toBeInTheDocument();
  });  
  it('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação.', () => {
   const { customHistory } = renderWithRouter(<App />);

   const homeLink = screen.getByRole('link', { name: /Home/i })
   expect(homeLink).toBeInTheDocument();

   userEvent.click(homeLink);

   customHistory.push('/');

   const homeHeader = screen.getByRole('heading',{ name: /Encountered pokémons/i });

    expect(homeHeader).toBeInTheDocument();
  });  
  it('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação.', () => {
    const { customHistory } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toBeInTheDocument();

   userEvent.click(aboutLink);

   customHistory.push('/about');

   const aboutPokedex = screen.getByRole('heading',{ name: /About Pokédex/i });

    expect(aboutPokedex).toBeInTheDocument();
  });  
  it('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação.', () => {
    const { customHistory } = renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i })
    expect(favoriteLink).toBeInTheDocument();

   userEvent.click(favoriteLink);

   customHistory.push('/favorites');

   const favoritePokemon = screen.getByRole('heading',{ name: /Favorite pokémons/i });

    expect(favoritePokemon).toBeInTheDocument();
  });  
  it('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida."', () => {
    const { customHistory } = renderWithRouter(<App />);

    customHistory.push('/azeitonastropicais');

    const notFoundText = screen.getByText(/Page requested not found/i);

    expect(notFoundText).toBeInTheDocument();

  });  
 
});
