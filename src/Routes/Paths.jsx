import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import ProductViewPage from "../Pages/ProductViewPage";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../Pages/NotFound";
import ProductListingPage from "../Pages/ProductListingPage";
import Camisetas from "../Pages/Camisetas";


const Paths = () => {
    return ( 
        <>
        <BrowserRouter>
                           
            <Routes>

                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="/produtos" element={<ProductViewPage />}/>
                    <Route path="/ProductListingPage/:id/:nome" element={<ProductListingPage/>}/>
                    <Route path="/camisetas" element={<Camisetas />}/>
                </Route>
                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>
        

        </>
     );
}
 
export default Paths;