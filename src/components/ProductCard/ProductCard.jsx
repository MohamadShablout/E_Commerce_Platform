import styles from "./ProductCard.module.css"

function ProductCard({ name, price, image, description}) {


    return (

        <div className = {styles.card}>
            
            <div className = {styles.upperHalf}>
                <img className = {styles.productImage} src = {image} alt = {name} />
                <button className = {styles.productFavorite}>❤</button>
            </div>
            
            <div className = {styles.lowerHalf}>                
                <div className = {styles.productName}>{name}</div>
                <div className = {styles.productDescription}>{description}</div>
                <div className = {styles.productPrice}>${price}</div>
                <button className = {styles.addToCart}>+</button>
            </div>

        </div>

    );
}

export default ProductCard