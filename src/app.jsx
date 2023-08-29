import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CartContext from "./components/CartContext/CartContext";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
