import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as you create pages */}
            {/* <Route path="/categories" element={<Categories />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>
    );
}

export default AppRoutes;