import styles from "./ProductCard.module.css"
import {useState} from "react"
import { Link } from "react-router-dom"

function ProductCard({ id, name, price, image, shortDescription}) {

    // Creating a variable for Favorite useState button
    const [isFav , setIsFav] = useState(false)

    // the function used to update the variable
    const upDateFav = () => {
        setIsFav(prev => !prev)
    }

    return (

        <div className = {styles.card}>
            
            <div className = {styles.upperHalf}>

                <Link to = {`/product/${id}`}>
                <img className = {styles.productImage} src = {image} alt = {name} />
                </Link>
                
                <button 
                className = {styles.productFavorite}
                onClick={upDateFav}
                style={{ color: isFav ? "#ff3d3d" : "" }}
                >❤</button>
            </div>
            
            <div className = {styles.lowerHalf}>                
                <div className = {styles.productName}>{name}</div>
                <div className = {styles.productShortDescription}>{shortDescription}</div>
                <div className = {styles.productPrice}>${price}</div>

                <button
                className = {styles.addToCart}
                >+</button>
            </div>

        </div>

    );
}

export default ProductCard