import styles from "./header.module.css"

function Header() {
    
    return(
        <header>
            <h1 className = {styles.h1} >O-Shop</h1>

            <nav>

                <ul>

                    <li className = {styles.li} ><a>Categories</a></li>
                    <li className = {styles.li} ><a>Collections</a></li>
                    <li className = {styles.li} ><a>Contact</a></li>
                    <li className = {styles.li} ><a>About</a></li>

                </ul>
            </nav>

        </header>
    );
}

export default Header