import { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.section`
  padding: 30px 80px 30px;
  background-color: var(--light-gray-3);
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Breadcrumb = styled.nav`
  font-size: 14px;
  color: var(--dark-gray-2);
  margin-bottom: 30px;

  strong {
    font-weight: 700;
  }
`;

const ProductMain = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 0px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const GalleryColumn = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.$bgColor || "#E2E3FF"};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 75%;
    max-height: 75%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 320px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$direction === "left" ? "left: 16px;" : "right: 16px;")}
  background: transparent;
  border: none;
  font-size: 28px;
  color: var(--dark-gray-2);
  cursor: pointer;
`;

const ThumbnailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

const ThumbnailCard = styled.div`
  height: 95px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid ${(props) => (props.$active ? "var(--primary)" : "transparent")};

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;

const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: var(--dark-gray);
    margin-bottom: 10px;
  }

  .meta {
    font-size: 12px;
    color: var(--dark-gray-3);
    margin-bottom: 14px;
  }
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  .stars {
    color: #F6AA1C;
    font-size: 16px;
  }

  .badge {
    background-color: #F6AA1C;
    color: var(--white);
    font-size: 14px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 4px;
  }

  .reviews {
    font-size: 14px;
    color: var(--light-gray);
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;

  .currency {
    font-size: 16px;
    color: var(--dark-gray-2);
  }

  .current {
    font-size: 32px;
    font-weight: 700;
    color: var(--dark-gray);
  }

  .old {
    font-size: 16px;
    color: var(--light-gray);
    text-decoration: line-through;
  }
`;

const Description = styled.div`
  margin-bottom: 24px;

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--light-gray);
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: var(--dark-gray-2);
    line-height: 22px;
  }
`;

const SelectorGroup = styled.div`
  margin-bottom: 24px;

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--light-gray);
    margin-bottom: 10px;
  }

  .options {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

const SizeButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$selected ? "var(--primary)" : "#CCCCCC")};
  background-color: ${(props) => (props.$selected ? "var(--primary)" : "var(--white)")};
  color: ${(props) => (props.$selected ? "var(--white)" : "var(--dark-gray-2)")};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const ColorButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  border: 2px solid var(--white);
  outline: 2px solid ${(props) => (props.$selected ? "var(--primary)" : "transparent")};
  cursor: pointer;
`;

const BuyButton = styled.button`
  width: 220px;
  height: 48px;
  background-color: #FFB31F;
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ProductRe = () => {
  const productData = {
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    category: "Casual",
    brand: "Nike",
    ref: "38416711",
    rating: "4.7",
    reviewsCount: 90,
    price: "219,00",
    oldPrice: "219,00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sizes: Array.of(39, 40, 41, 42, 43),
    colors: Array.of("#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"),
    gallery: Array.of(
      { id: 1, image: "product-thumb-1.jpeg", bg: "#E2E3FF" },
      { id: 2, image: "product-thumb-1.jpeg", bg: "#FFE8BC" },
      { id: 3, image: "product-thumb-1.jpeg", bg: "#FFC0BC" },
      { id: 4, image: "product-thumb-1.jpeg", bg: "#DEC699" },
      { id: 5, image: "product-thumb-1.jpeg", bg: "#E8DFCF" }
    ),
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSize, setSelectedSize] = useState(41);
  const [selectedColor, setSelectedColor] = useState("#FF6969");

  const handlePrev = () => {
    setActiveSlide((prev) =>
      prev === 0 ? productData.gallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveSlide((prev) =>
      prev === productData.gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <PageContainer>
      <Breadcrumb>
        <strong>Home</strong> / Produtos / Tênis / Nike / {productData.name}
      </Breadcrumb>

      <ProductMain>
        <GalleryColumn>
          <MainImageBox $bgColor={productData.gallery[activeSlide].bg}>
            <ArrowButton $direction="left" onClick={handlePrev}>
              {"<"}
            </ArrowButton>
            <img
              src={productData.gallery[activeSlide].image}
              alt={productData.name}
            />
            <ArrowButton $direction="right" onClick={handleNext}>
              {">"}
            </ArrowButton>
          </MainImageBox>

          <ThumbnailsGrid>
            {productData.gallery.map((item, index) => (
              <ThumbnailCard
                key={item.id}
                $bgColor={item.bg}
                $active={activeSlide === index}
                onClick={() => setActiveSlide(index)}
              >
                <img src={item.image} alt={`Miniatura ${index + 1}`} />
              </ThumbnailCard>
            ))}
          </ThumbnailsGrid>
        </GalleryColumn>

        <InfoColumn>
          <h1>{productData.name}</h1>
          <span className="meta">
            {productData.category} | {productData.brand} | REF:{productData.ref}
          </span>

          <RatingRow>
            <span className="stars">{"★★★★☆"}</span>
            <span className="badge">{productData.rating} {"★"}</span>
            <span className="reviews">
              ({productData.reviewsCount} avaliações)
            </span>
          </RatingRow>

          <PriceRow>
            <span className="currency">R$</span>
            <span className="current">{productData.price}</span>
            <span className="old">{productData.oldPrice}</span>
          </PriceRow>

          <Description>
            <h4>Descrição do produto</h4>
            <p>{productData.description}</p>
          </Description>

          <SelectorGroup>
            <h4>Tamanho</h4>
            <div className="options">
              {productData.sizes.map((size) => (
                <SizeButton
                  key={size}
                  $selected={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </div>
          </SelectorGroup>

          <SelectorGroup>
            <h4>Cor</h4>
            <div className="options">
              {productData.colors.map((color) => (
                <ColorButton
                  key={color}
                  $color={color}
                  $selected={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </SelectorGroup>

          <BuyButton>COMPRAR</BuyButton>
        </InfoColumn>
      </ProductMain>
    </PageContainer>
  );
};

export default ProductRe;
