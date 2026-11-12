import styled from "styled-components";

const ProductsSection = styled.section`
 padding: 30px 80px;
 background-color: var(--light-gray-3); /* #F5F5F5 */
 font-family: 'Inter', sans-serif;
`;

const SectionHeader = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 30px;

 h3 {
 font-size: 24px;
 font-weight: 700;
 color: var(--dark-gray-2); /* #474747 */
 }

 a {
 font-size: 16px;
 color: var(--primary); /* #C92071 */
 text-decoration: none;
 font-weight: 500;
 display: flex;
 align-items: center;
 gap: 8px;
 
 &:hover {
 text-decoration: underline;
 }
 }
`;

const ProductsGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 15fr); /* 4 colunas */
 gap: 24px;
 width: 100%;

 @media (max-width: 1024px) {
 grid-template-columns: repeat(2, 1fr); /* 2 colunas em tablets */
 }
 @media (max-width: 600px) {
 grid-template-columns: 1fr; /* 1 coluna no mobile */
 }
`;

const ProductCard = styled.div`
 display: flex;
 flex-direction: column;
 cursor: pointer;
`;

const ImageContainer = styled.div`
 position: relative;
 background-color: var(--white);
 border-radius: 8px;
 padding: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
 box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.03);
 margin-bottom: 16px;
 height: 320px;

 img {
 max-width: 100%;
 object-fit: contain;
 transition: transform 0.3s ease;
 }

 &:hover img {
 transform: scale(1.05);
 }
`;

const DiscountBadge = styled.span`
 position: absolute;
 top: 16px;
 left: 16px;
 background-color: #E7FF86; 
 color: var(--dark-gray-2);
 font-size: 12px;
 font-weight: 700;
 padding: 6px 12px;
 border-radius: 20px;
 text-transform: uppercase;
`;

const ProductInfo = styled.div`
 display: flex;
 flex-direction: column;
 gap: 6px;

 .category {
 font-size: 12px;
 font-weight: 700;
 color: var(--light-gray); /* #8F8F8F */
 text-transform: capitalize;
 }

 .title {
 font-size: 24px;
 font-weight: 400;
 color: var(--dark-gray-2);
 line-height: 28px;
 }

 .price-container {
 display: flex;
 gap: 10px;
 align-items: center;
 margin-top: 4px;
 }

 .old-price {
 font-size: 24px;
 color: var(--light-gray);
 text-decoration: line-through;
 }

 .current-price {
 font-size: 24px;
 font-weight: 700;
 color: var(--dark-gray); /* #1F1F1F */
 }
`;

const Ofertas = () => {
 
  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    title: "K-Swiss V8 - Masculino",
    category: "Tênis",
    // 💡 Correção: Começa com "/" e busca direto o arquivo que está na raiz da pasta public
    image: "/product-thumb-5.jpeg", 
    oldPrice: "$200",
    currentPrice: "$100",
    discount: "30% OFF",
  }));

  return (
    <ProductsSection>
      <SectionHeader>
        <h3>Produtos em alta</h3>
        <a href="#todos">Ver todos &rarr;</a>
      </SectionHeader>

      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ImageContainer>
              {product.discount && <DiscountBadge>{product.discount}</DiscountBadge>}
              <img src={product.image} alt={product.title} />
            </ImageContainer>

            <ProductInfo>
              <span className="category">{product.category}</span>
              <h4 className="title">{product.title}</h4>
              <div className="price-container">
                <span className="old-price">{product.oldPrice}</span>
                <span className="current-price">{product.currentPrice}</span>
              </div>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsSection>
  );
};

export default Ofertas;