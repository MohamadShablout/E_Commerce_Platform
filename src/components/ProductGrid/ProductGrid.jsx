import styles from "./ProductGrid.module.css"
// importing the ProductCard component and the data from products
import ProductCard from "../ProductCard/ProductCard.jsx"
import products from "../../data/products.js"

function ProductGrid() {

    return (
        <div className = {styles.grid}>
            {[...products] // Use a spread rather than using the list itself

                // mapping the data into a ProductCard
                .map((product) => (
                    <ProductCard 
                        key = {product.id} 
                        name = {product.name} 
                        price = {product.price} 
                        image = {product.image} 
                        description = {product.description} />
            ))}
        </div>
    );
}

export default ProductGrid