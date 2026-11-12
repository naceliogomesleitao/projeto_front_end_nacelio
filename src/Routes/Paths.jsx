import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import ProductViewPage from "../Pages/ProductViewPage";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../Pages/NotFound";
import ProductListingPage from "../Pages/ProductListingPage";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          
          {/* Tela com barra lateral de filtros e grade de 3 colunas */}
          <Route path="/Categorias" element={<ProductViewPage />} />
          
          {/* Tela de detalhes do produto (Galeria + Tamanhos/Cores) */}
          <Route path="/Produtos" element={<ProductListingPage />} />
          
          {/* Rota dinâmica pronta para cliques nos cards e futura API */}
          <Route path="/produto/:id" element={<ProductListingPage />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
