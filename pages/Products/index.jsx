import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaArrowUp } from "react-icons/fa";

import ProductHero from "./components/ProductHero";
import ProductList from "./components/ProductList";
import Footer from "../../components/common/Footer";

import productsPageStyle from "./Products.styles";
import "./Products.styles.css";

function Products() {
  const { category } = useParams();

  const currentCategory = category || "hiking";

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main style={productsPageStyle}>
      <ProductHero currentCategory={currentCategory} />

      <ProductList currentCategory={currentCategory} />

      <Footer />

      {showTopButton && (
        <button
          className="top-button"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </main>
  );
}

export default Products;