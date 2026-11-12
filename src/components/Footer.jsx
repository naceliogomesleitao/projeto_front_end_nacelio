//import { NavLink } from "react-router";
import styled from "styled-components";

// Container
const FooterContainer = styled.footer`
  background-color: #1f1f1f; 
  padding: 60px 100px 30px 100px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
`;
// Container-Colunas
const FooterBlack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 40px;
  text-align: left;  
`;

// Redes Sociais
const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 300px;

  h5 {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #ffffff;
    margin: 0;
     &:hover {
      opacity: 0.8;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 24px;
  
  img {
    height: 20px;
    cursor: pointer;
  }
`;

// títulos das colunas
const NavColumn = styled.div`
min-width: 130px;
.cat{
    font-size: 14px;
    color: var(--white); 
    text-decoration: none; 
    cursor: pointer;
    line-height: 24px;
    transition: opacity 0.2s, color 0.2s;
    display: inline-block;

}
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 24px;
    color: #ffffff;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
// listas das colunas
  li {
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    line-height: 24px;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;


// Copyright
const Hr = styled.hr`
  border: 0;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  margin: 40px 0 20px 0;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  

`;

//Footer
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBlack>
        {/* Logo e ícones */}
        <LogoColumn>
          <img
            src="src/assets/logo-footer.svg"
            alt="Digital Store Logo"
            style={{ height: "44px", width: "180px" }}
          />
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </h5>
          <SocialIcons>
            <img src="src/assets/facebook.svg" alt="Facebook" />
            <img src="src/assets/instagram.svg" alt="Instagram" />
            <img src="src/assets/twitter.svg" alt="Twitter" />
          </SocialIcons>
        </LogoColumn>

        {/* Colunas */}
        <NavColumn>
          <h4>Informação</h4>
          <ul>
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
          </ul>
        </NavColumn>

        <NavColumn>
          <h4>Categorias</h4>
          <ul>
            {/*<li><NavLink className="cat">Camisetas</NavLink></li>*/}
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </NavColumn>

        <NavColumn>
          <h4>Contato</h4>
          <ul>
            <li>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
            </li>
            <li>(85) 3051-3411</li>
          </ul>
        </NavColumn>
      </FooterBlack>

      <Hr />
      
      <Copyright>© 2026 Digital College</Copyright>
    </FooterContainer>
  );
};

export default Footer;
