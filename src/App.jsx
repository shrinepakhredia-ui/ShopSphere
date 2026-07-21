import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Profile/Profile";
import Orders from "./pages/Orders/Orders";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import About from "./pages/About/About";
import FAQs from "./pages/FAQs/FAQs";
import Shipping from "./pages/Shipping/Shipping";
import Returns from "./pages/Returns/Returns";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* Footer Pages */}

          <Route path="/about" element={<About />} />

          <Route path="/faqs" element={<FAQs />} />

          <Route path="/shipping" element={<Shipping />} />

          <Route path="/returns" element={<Returns />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;