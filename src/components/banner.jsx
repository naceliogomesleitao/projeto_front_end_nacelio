import styled from "styled-components";

// CARROSSEL (Fundo acinzentado suave)
const HeroContainer = styled.section`
  background-color: var(--light-gray-3); /* #F5F5F5 */
  padding: 80px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  font-family: 'Inter', sans-serif;
  text-align: left;
  overflow: hidden;
`;

// TEXTOS E BOTÃO
const ContentSide = styled.div`
  max-width: 510px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 2;

  .subtitle {
    color: var(--warning); /* #F6AA1C - Laranja/Amarelo */
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }

  h1 {
    font-size: 64px;
    font-weight: 800;
    color: var(--dark-gray); /* #1F1F1F */
    line-height: 1.1;
    margin: 0;
    letter-spacing: -1px;

    span {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
  }

  .description {
    color: var(--dark-gray-3); /* #666666 */
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
  }

  .btn-offers {
    background-color: var(--primary); /* #C92071 */
    color: var(--white);
    border: none;
    border-radius: 8px;
    padding: 16px 40px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    align-self: flex-start; /* Impede o botão de esticar até o final */
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
      background-color: var(--tertiary); /* Rosa mais escuro */
      transform: translateY(-2px);
    }
  }
`;

// IMAGEM DO TÊNIS 
const ImageSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* Imagem do tênis  */
  .tenis-img {
    max-width: 100%;
    height: auto;
    object-fit: contain;

  }
`;

// Pontinhos embaixo
const Pontinhos = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #CCCCCC; /* var(--light-gray-2) */
    cursor: pointer;
    transition: background-color 0.2s;

    &.active {
      background-color: var(--primary); /* O pontinho rosa ativo */
    }
  }
`;

const Banner = () => {
  return (
    <HeroContainer>
      {/* CONTEÚDO DA ESQUERDA */}
      <ContentSide>
        <p className="subtitle">Melhores ofertas personalizadas</p>
        <h1>
          Queima de<br />
          estoque Nike <span>🔥</span>
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, explicabo consequuntur doloremque aspernatur 
        </p>
        <button className="btn-offers">Ver Ofertas</button>
      </ContentSide>

      {/* IMAGEM DA DIREITA */}
      <ImageSide>
           <img src="public/produc-image-5.jpeg" alt="Nike Air Force Red" className="tenis-img" />
      </ImageSide>

      {/* PONTINHOS DE NAVEGAÇÃO DO SLIDE */}
      <Pontinhos>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </Pontinhos>
    </HeroContainer>
  );
};

export default Banner;
