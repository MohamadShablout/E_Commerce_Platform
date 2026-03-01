import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import products from "../../data/products"

function Header() {
    

    // List for Categories 
    const categories = [...new Set(products.map(p => p.category))];


    // User Personal Links
    const navItemsCtrl = [
        { name: 'Cart', link: '/pages/cart' },
        { name: 'Account', link: '/pages/account' },
        { name: 'Menu', link: '/pages/menu' },
    ];

    // Return Website Name and 2 lists for links 
    return(
        <header className={styles.header}>

            <h1 className = {styles.shopName}>
                <Link to="/" className={styles.link}>O-Shop</Link>
            </h1>

            <nav className = {styles.navbar}>

                <ul className = {styles.navbarLinks}>

                        <li className={styles.list}>
                            <p className={styles.link}>Categories</p>

                            <ul className={styles.dropdown}>
                                
                                {categories
                                .map((item) => (
                                <li key={item} className={styles.dropdownItem}>
                                    <Link to={`/categories/${item}`} className={styles.link}>{item}</Link>
                                </li>
                                ))}

                            </ul>
                        </li>


                        <li className={styles.list}>
                            <p className={styles.link}>Collections</p>
                        </li>

                </ul>

                <ul className={styles.navbarLinks}>

                        {navItemsCtrl
                        .map((item) => (
                        <li key={item.name} className={styles.list}>
                            <Link to={item.link} className={styles.link}>{item.name}</Link>
                        </li>
                         ))}

                </ul>
            </nav>

        </header>
    );
}

export default Header