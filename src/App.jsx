import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  // ← AJOUTÉ
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />  {/* ← FOOTER GLOBAL */}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
