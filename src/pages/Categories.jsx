import { useParams } from "react-router-dom";
import products from "../data/products.js";
import ProductGridCategories from "../components/ProductGridCategories/ProductGridCategories.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";

function Categories() {

    // assign the page by ID
    const { category } = useParams();

    // make new list containing the categories
    const categories = [...new Set(products.map(p => p.category))];

    // if the category does not exist return not found
    const categoryChecked = categories.find(c => c.toLowerCase() === category.toLowerCase());
    if (!categoryChecked) return <h2>Category Not Found.</h2>;

    return (
        <>

        <Header />

        <ProductGridCategories category = { categoryChecked }/>
        
        <Footer />

        </>
    );
}

export default Categories