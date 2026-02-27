import styles from "./ProductGrid.module.css"
import ProductCard from "../ProductCard/ProductCard.jsx"
import products from "../../data/products.js"

function ProductGrid() {
    
    return (
        <div className = {styles.grid}>
            {[...products]
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