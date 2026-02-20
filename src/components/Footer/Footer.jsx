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
        { name: 'Insta', link: '/' },
        { name: 'X', link: '/' },
        { name: 'YouTube', link: '/' },
    ]

    return (

        <>
            <footer className={styles.footerM}>

                <div>
                    
                    <div>
                        <h2>Contact</h2>
                        <ul>
                                {contactList.map((item) => (
                                    
                                    <li key={item.name} className={styles.li}>
                                    <a href={item.link}>{item.name}</a>
                                </li>

                                    ))}
                        </ul>
                    </div>

                    <div>               
                        <h2>About</h2>
                        <ul>
                                {aboutList.map((item) => (
                                    
                                    <li key={item.name} className={styles.li}>
                                    <a href={item.link}>{item.name}</a>
                                </li>

                                    ))}
                        </ul>
                    </div>

                    <div>
                    <h2>Social Media</h2>
                        <ul>
                                {socialMediaList.map((item) => (
                                    
                                    <li key={item.name} className={styles.li}>
                                    <a href={item.link}>{item.name}</a>
                                </li>

                                    ))}
                        </ul>
                    </div>

                </div>
            </footer>

        </>
    );
}

export default Footer