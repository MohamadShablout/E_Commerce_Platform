import styles from "./Details.module.css";
import { Link } from "react-router-dom";

function Details({product}){

    return (

            <div className={styles.productDetail}>

                <Link to="/">
                    <button className={styles.backButton}>🡐</button>
                </Link>

                <div className={styles.imageSection}>
                    <img src={product.image} alt={product.name} />
                </div>

                <div className={styles.infoSection}>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <p className={styles.productCategory}>{product.category}</p>
                    <p className={styles.productDescription}>{product.description}</p>
                    <span className={styles.productPrice}>${product.price}</span>
                    <button className={styles.addToCart}>Add To Cart</button>
                </div>

            </div>
    );
}

export default Details