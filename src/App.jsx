import { useState } from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPerfumes from "./components/FeaturedPerfumes";
import Collections from "./components/Collections";
import About from "./components/About";
import FragranceExperience from "./components/FragranceExperience";
import SpecialOffer from "./components/SpecialOffer";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import Tracking from "./pages/Tracking";

function Home({ cart, addToCart }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f3ed] text-[#171513]">
      <LoadingScreen />

      <Navbar cartCount={cart.length} />

      <main>
        <Hero />

        <FeaturedPerfumes
          onAddToCart={addToCart}
        />

        <Collections />

        <About />

        <FragranceExperience />

        <SpecialOffer />

        <Testimonials />

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Home
              cart={cart}
              addToCart={addToCart}
            />
          }
        />

              <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/payment"
          element={
            <Payment
              cart={cart}
              clearCart={clearCart}
            />
          }
        />

        <Route
          path="/tracking"
          element={<Tracking />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;