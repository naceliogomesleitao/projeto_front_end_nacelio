import { Link } from "react-router";

const ProductViewPage = () => {
    return ( 

        <>
        <h1>Produtos</h1>

        <ul>
            <li><Link to={"/ProductListingPage/1/Abacate"}>Abacate</Link></li>
            <li><Link to={"/ProductListingPage/2/Banana"}>Banana</Link></li>
            <li><Link to={"/ProductListingPage/3/Cenoura"}>Cenoura</Link></li>
            <li><Link to={"/ProductListingPage/4/Espinafre"}>Espinafre</Link></li>
            <li><Link to={"/ProductListingPage/5/Framboesa"}>Framboesa</Link></li>
        
        </ul>
        </>
     );
}
 
export default ProductViewPage;