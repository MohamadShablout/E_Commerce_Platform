import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
// temp:
import ProductCard from "../components/ProductCard/ProductCard.jsx"

function Home() {

    // TODO : Add Comments

    return (

        <>
        <Header />

        <ProductCard
            name="Cool Headphones"
            price={59.99}
            image="/images/products/product2.png"
            description="High-quality wireless headphones."
        />


        <Footer />
        </>

    );
}

export default Home