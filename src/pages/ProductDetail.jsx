import { useParams } from "react-router-dom"
import products from "../data/products.js"
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Details from "../components/Details/Details.jsx"

function ProductDetail(){

    // assign the card by ID
    const { id } = useParams();

    // if the card does not exist by that ID return not found
    const product = products.find(p => p.id === Number(id));
    if (!product) return <h2>Product Not Found.</h2>;


    return(
        <>
            <Header />

            <Details product = {product} />

            <Footer />
        </>
    )
}

export default ProductDetail