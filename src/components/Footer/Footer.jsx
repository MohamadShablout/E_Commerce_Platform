import styles from "./Footer.module.css"


    function Footer() {

    // TODO : Add Actual links to all lists
    // ! '/' is just a place holder change it later

    // TODO : Add Comments

    const contactList = [
        { name: 'Email', link: '/' },
        { name: 'PhoneNumber', link: '/' },
        { name: 'Address', link: '/' }
    ]

    const aboutList = [
        { name: 'Term of Service', link: '/' },
        { name: 'Privacy Policy', link: '/' },
        { name: 'Career', link: '/' }
    ]

    const socialMediaList = [
        { name: 'Instagram', link: '/' },
        { name: 'X', link: '/' },
        { name: 'YouTube', link: '/' },
    ]

    return (

        <>
            <footer className={styles.footer}>


                <div className = {styles.columns}>

                    <div className = {styles.column}>
                        <h1 className={styles.shopName}>O-Shop</h1>
                    </div>
                    
                    <div className = {styles.column}>
                        <h3 className = {styles.columnTitle}>Contact</h3>
                        <ul className={styles.list}>
                                {contactList.map((item) => (
                                    
                                    <li key={item.name} className={styles.listItem}>
                                    <a href={item.link} className={styles.link}>{item.name}</a>
                                </li>

                                    ))}
                        </ul>
                    </div>

                    <div className = {styles.column}>               
                        <h3 className = {styles.columnTitle}>About</h3>
                        <ul className={styles.list}>
                                {aboutList.map((item) => (
                                    
                                    <li key={item.name} className={styles.listItem}>
                                    <a href={item.link} className={styles.link}>{item.name}</a>
                                </li>

                                    ))}
                        </ul>
                    </div>

                    <div className = {styles.column}>
                        <h3 className = {styles.columnTitle}>Social Media</h3>
                        <ul className={styles.list}>
                                {socialMediaList.map((item) => (
                                    
                                    <li key={item.name} className={styles.listItem}>
                                    <a href={item.link} className={styles.link}>{item.name}</a>
                                </li>

                                    ))}
                        </ul>
                    </div>

                </div>

                <div className={styles.copyright}>
                    <p>© 2026 O-shop. All rights reserved.</p>
                </div>
            </footer>

        </>
    );
}

export default Footer