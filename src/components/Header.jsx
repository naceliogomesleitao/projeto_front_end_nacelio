import { NavLink } from "react-router";
import styled from "styled-components";

// Header
const HeaderContainer = styled.header`
  background-color: var(--white);
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  gap: 30px; 
  font-family: 'Inter', sans-serif;
`;

// Logo, Busca, Cadastre-se e Entrar
const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
`;

// Input
const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 600%;
  overflow: hidden; 

  input {
    width: 100%;
    padding: 15px 50px 15px 20px;
    background-color: var(--light-gray-3); /* #F5F5F5 */
    border: none;
    border-radius: 8px;
    font-size: 16px;
    color: var(--dark-gray-3);
    outline: none;

    &::placeholder {
      color: var(--light-gray);
    }
  }

  img {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

// Botões da direita
const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  .btn-register {
    color: var(--dark-gray-2);
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    
    &:hover {
      color: var(--primary);
    }
  }

  .btn-login {
    background-color: var(--primary); /* #C92071 */
    color: var(--white);
    padding: 12px 35px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background-color: var(--tertiary);
    }
  }
  
  .cart-icon {
    width: 24px;
    height: 24px;
  }
`;

// Menu de Navegação
const NavMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 32px;
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--dark-gray-2); /* #474747 */
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;

    &:hover, &.active {
      color: var(--primary);
      font-weight: bold;
      border-bottom: 2px solid var(--primary); 
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
        <TopRow>
            <img src="src/assets/logo-header.svg" alt="Digital Store Logo" style={{ height: "44px", width: "180px"}} />

        {/* Barra de Pesquisa */}
        <SearchContainer>
          <input type="text" placeholder="Pesquisar produto..." style={{ height: "24px", width: "290px"}}  />
          <img src="src/assets/lupa.svg" alt="Buscar" /> 
        </SearchContainer>

        <ActionContainer>
          <NavLink to="/cadastrese" className="btn-register">Cadastre-se</NavLink>
          <NavLink to="/entrar" className="btn-login">Entrar</NavLink>
          <img src="src/assets/mini-cart.svg" alt="Carrinho" className="cart-icon" /> 
        </ActionContainer>
      </TopRow>

      {/* Menus */}
      <NavMenu>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/produtos">Produtos</NavLink></li>
          <li><NavLink to="/categoria">Categorias</NavLink></li>
          <li><NavLink to="/meus-pedidos">Meus Pedidos</NavLink></li>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
