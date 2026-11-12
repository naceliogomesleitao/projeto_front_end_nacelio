import styled from "styled-components";

// 1. CONTAINER PRINCIPAL DA SEÇÃO
const CategoriesSection = styled.section`
  padding: 40px 80px;
  background-color: var(--light-gray-3); /* #F5F5F5 */
  font-family: 'Inter', sans-serif;
  text-align: center; /* Centraliza o título da seção */
`;

// 2. TÍTULO CENTRALIZADO
const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray-2); /* #474747 */
  margin-bottom: 40px;
`;

// 3. CONTAINER DOS ÍCONES (Alinhados lado a lado no centro)
const IconsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px; /* Espaçamento generoso entre os círculos */
  width: 100%;
  flex-wrap: wrap; /* Permite quebrar linha em telas menores */
`;

// 4. ITEM INDIVIDUAL (Círculo + Texto)
const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px; /* Espaço entre o círculo e o texto embaixo */
  cursor: pointer;

  /* Círculo Branco com Sombra */
  .icon-circle {
    width: 104px;
    height: 104px;
    background-color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05); /* Sombra bem suave */
    transition: transform 0.2s, box-shadow 0.2s;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  /* Texto embaixo do ícone */
  span {
    font-size: 14px;
    font-weight: 700;
    color: var(--dark-gray-2); /* #474747 */
    transition: color 0.2s;
  }

  /* 🔥 Efeito de Hover: Quando o mouse passa no item, o círculo sobe e o texto fica rosa */
  &:hover {
    .icon-circle {
      transform: translateY(-5px);
      box-shadow: 0px 8px 20px rgba(201, 32, 113, 0.15); /* Sombra levemente rosa */
    }
    
    span {
      color: var(--primary); /* Muda o texto para o rosa #C92071 */
    }
  }
`;

const Icones = () => {
  // Lista de dados para renderizar os ícones dinamicamente e deixar o código limpo
  const categories = [
    { id: 1, name: "Camisetas", icon: "src/assets/blusa.png" },
    { id: 2, name: "Calças", icon: "src/assets/calca.png" },
    { id: 3, name: "Bonés", icon: "src/assets/bone.png" },
    { id: 4, name: "Headphones", icon: "src/assets/fone.png" },
    { id: 5, name: "Tênis", icon: "src/assets/tenis.png" },
  ];

  return (
    <CategoriesSection>
      <SectionTitle>Coleções em destaque</SectionTitle>

      <IconsGrid>
        {categories.map((category) => (
          <CategoryItem key={category.id}>
            <div className="icon-circle">
              <img src={category.icon} alt={category.name} />
            </div>
            <span>{category.name}</span>
          </CategoryItem>
        ))}
      </IconsGrid>
    </CategoriesSection>
  );
};

export default Icones;
