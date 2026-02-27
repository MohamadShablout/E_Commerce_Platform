import styles from "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {
    

    // Website Navigation Links    
    const navItemsNav = [
        { name: 'Categories', link: '/categories' },
        { name: 'Collections', link: '/collections' },
    ];

    // User Personal Links
    const navItemsCtrl = [
        { name: 'Cart', link: '/pages/cart' },
        { name: 'Account', link: '/pages/account' },
        { name: 'menu', link: '/pages/menu' },
    ];

    // Return Website Name and 2 lists for links 
    return(
        <header className={styles.header}>

            <h1 className = {styles.shopName}>
                <Link to="/" className={styles.link}>O-Shop</Link>
            </h1>

            <nav className = {styles.navbar}>

                <ul className = {styles.navbarLinks}>

                        {navItemsNav.map((item) => (

                        <li key={item.name} className={styles.liHeader}>
                            <Link to={item.link} className={styles.link}>{item.name}</Link>
                        </li>

                         ))}

                </ul>

                <ul className={styles.navbarLinks}>

                        {navItemsCtrl.map((item) => (

                        <li key={item.name} className={styles.liHeader}>
                            <Link to={item.link} className={styles.link}>{item.name}</Link>
                        </li>

                         ))}

                </ul>
            </nav>

        </header>
    );
}

export default Header