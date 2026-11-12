import styled from "styled-components";

const SpecialOfferSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
  background-color: var(--white);
  font-family: 'Inter', sans-serif;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    z-index: 2;
    object-fit: contain;
  }
`;

const TextSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
  }

  .subtitle {
    color: var(--primary); /* #C92071 */
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.75px;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 48px;
    font-weight: 800;
    color: var(--dark-gray-2); /* #474747 */
    line-height: 50px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: var(--dark-gray-2);
    line-height: 28px;
    margin-bottom: 30px;
    font-weight: 400;
  }
`;

const OfferButton = styled.button`
  background-color: var(--primary); /* #C92071 */
  color: var(--white);
  border: none;
  border-radius: 8px;
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Especial = () => {
  return (
    <SpecialOfferSection>
      <ImageSide>
        <img src="public/produc-image-3.jpeg" alt="Air Jordan Edição de Colecionador" />
      </ImageSide>

      <TextSide>
        <span className="subtitle">Oferta especial</span>
        <h2>Air Jordan edição de colecionador</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <OfferButton>Ver Oferta</OfferButton>
      </TextSide>
    </SpecialOfferSection>
  );
};

export default Especial;
