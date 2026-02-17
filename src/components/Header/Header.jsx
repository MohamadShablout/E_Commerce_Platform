import styles from "./Header.module.css"

function Header() {
    
    const navItemsNav = [
        { name: 'Categories', link: '/categories' },
        { name: 'Collections', link: '/collections' },
        { name: 'Contact', link: '/contact' },
        { name: 'About', link: '/about' }
    ];

    const navItemsCtrl = [
        { name: 'Cart', link: '/pages/cart' },
        { name: 'Account', link: '/pages/account' },
        { name: 'menu', link: '/pages/menu' },
    ];

    return(
        <header className={styles.header}>

            <h1 className = {styles.h1} >O-Shop</h1>

            <nav className = {styles.navbar}>

                <ul className={styles.navbar_links}>

                        {navItemsNav.map((item) => (

                        <li key={item.name} className={styles.li}>
                            <a href={item.link}>{item.name}</a>
                        </li>

                         ))}

                </ul>

                <ul className={styles.navbar_links}>

                        {navItemsCtrl.map((item) => (

                        <li key={item.name} className={styles.li}>
                            <a href={item.link}>{item.name}</a>
                        </li>

                         ))}

                </ul>
            </nav>

        </header>
    );
}

export default Header