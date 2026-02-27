import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProductDetail from "../pages/ProductDetail.jsx"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/product/:id" element = {<ProductDetail />}/>
            {/* <Route path="/categories" element={<Categories />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>
    );
}

export default AppRoutes;