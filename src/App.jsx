import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopcategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<Shopcategory banner={men_banner} category="men" />}
          ></Route>
          <Route
            path="/womens"
            element={<Shopcategory banner={women_banner} category="women" />}
          ></Route>
          <Route
            path="/kids"
            element={<Shopcategory banner={kid_banner} category="kid" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
