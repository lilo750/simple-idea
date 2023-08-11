import { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ProductList from "./Components/ProductsList";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductList />
    </>
  );
}

export default App;
