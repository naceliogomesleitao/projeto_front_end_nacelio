import { useParams } from "react-router";

const ProductListingPage = () => {

    const {id, nome} = useParams ();

    return (

        <>
        <h1>Produto {id} {nome}</h1>
      
        </>
      );
}
 
export default ProductListingPage;