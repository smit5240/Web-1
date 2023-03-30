import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";
import Slider from "./Slider";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
}
