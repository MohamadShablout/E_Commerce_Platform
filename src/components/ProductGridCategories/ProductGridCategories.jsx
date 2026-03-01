import styles from "./ProductGridCategories.module.css"

// importing the ProductCard component and the data from products
import ProductGrid from "../ProductGrid/ProductGrid.jsx"
import products from "../../data/products.js"

function ProductGridCategories( {category} ) {

    // filter and remove all products that don't have the same category into a new list
    const categoryProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase())

    return (

        <>
        <h1 className={styles.categoryTitle}>{category}</h1>

        <ProductGrid productList={categoryProducts}  />

        </>
    );
}

export default ProductGridCategories