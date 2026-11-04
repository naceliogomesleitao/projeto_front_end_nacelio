import styled from "styled-components";

//CONTAINER PRINCIPAL
const SectionContainer = styled.section`
  padding: 40px 100px;
  background-color: var(--light-gray-3); /* #F5F5F5 - Fundo levemente acinzentado */
  font-family: 'Inter', sans-serif;
  text-align: left;
`;

// TÍTULO
const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray-2); /* #474747 */
  margin-bottom: 20px;
`;

// GRID/FLEX CONTAINER DOS CARDS
const CardsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
`;

// 4. O CARD INDIVIDUAL
const Card = styled.div`
  flex: 1;
  background-color: #D8E3F2; /* Tom azulado suave de fundo do card */
  border-radius: 8px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  height: 250px;
  box-sizing: border-box;
`;

// 5. CONTEÚDO DO CARD (Texto, Badge e Botão)
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2; /* Garante que o texto fique acima da imagem se elas cruzarem */
  height: 100%;
  justify-content: space-between;

  .badge {
    background-color: #E7FF86; /* Amarelo limão do 30% OFF */
    color: var(--dark-gray);
    font-size: 12px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 20px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 28px;
    font-weight: 700;
    color: var(--dark-gray); /* #1F1F1F */
    margin: 15px 0;
    line-height: 1.2;
    max-width: 160px;
  }

  .btn-buy {
    background-color: var(--white);
    color: var(--primary); /* #C92071 */
    border: none;
    border-radius: 8px;
    padding: 12px 30px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

//IMAGEM DO CARD
const CardImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 70%;
  object-fit: contain;
  z-index: 1;
`;

// Componente Principal
const Destaques = () => {
  return (
    <SectionContainer>
      <SectionTitle>Coleções em destaque</SectionTitle>
      
      <CardsGrid>
        {/* CARD 1: Supreme */}
        <Card>
          <CardContent>
            <span className="badge">30% OFF</span>
            <button className="btn-buy">Comprar</button>
          </CardContent>
          <CardImage src="public/collection-1.png" />
        </Card>

        {/* CARD 2: Adidas */}
        <Card>
          <CardContent>
            <span className="badge">30% OFF</span>
            <button className="btn-buy">Comprar</button>
          </CardContent>
          <CardImage src="public/collection-2.png" />
        </Card>

        {/* CARD 3: Beats */}
        <Card>
          <CardContent>
            <span className="badge">30% OFF</span>
            <button className="btn-buy">Comprar</button>
          </CardContent>
          <CardImage src="public/collection-3.png" />
        </Card>
      </CardsGrid>
    </SectionContainer>
  );
};

export default Destaques;
