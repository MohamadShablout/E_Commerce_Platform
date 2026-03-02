import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProductGrid from "../components/ProductGrid/ProductGrid.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import products from "../data/products.js";

import { useState } from "react"

function Home() {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredProductsByName = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <>
        <Header />

        <SearchBar setSearchTerm={setSearchTerm} />
        <ProductGrid productList={filteredProductsByName} />

        <Footer />
        </>

    );
}

export default Home