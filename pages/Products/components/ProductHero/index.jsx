import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./ProductHero.styles.css";

import logo from "../../../../assets/images/north-logo1.png";

import heroWhiteLabel from "../../../../assets/images/hero/hero-whitelabel.png";
import heroRunning from "../../../../assets/images/hero/hero-running.png";
import heroCamping from "../../../../assets/images/hero/hero-camping.png";
import heroClimbing from "../../../../assets/images/hero/hero-climbing.png";
import heroTraining from "../../../../assets/images/hero/hero-training.png";
import heroHiking from "../../../../assets/images/hero/hero-hiking.png";

import { FaSearch, FaShoppingCart } from "react-icons/fa";

function ProductHero({ currentCategory }) {
  const [searchText, setSearchText] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [savedCount, setSavedCount] = useState(
    Number(localStorage.getItem("cartCount")) || 0
  );

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const updateCartState = () => {
    const newItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newCount = Number(localStorage.getItem("cartCount")) || 0;

    setCartItems(newItems);
    setSavedCount(newCount);
  };

  useEffect(() => {
    updateCartState();

    window.addEventListener("storage", updateCartState);

    return () => {
      window.removeEventListener("storage", updateCartState);
    };
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartCount", 0);

    setCartItems([]);
    setSavedCount(0);
  };

  const updateQuantity = (id, type) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id !== id) return item;

        const newQuantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;

        return {
          ...item,
          quantity: newQuantity,
        };
      })
      .filter((item) => item.quantity > 0);

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    const totalCount = updatedItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setSavedCount(totalCount);
    localStorage.setItem("cartCount", totalCount);
  };

  const toggleCheckItem = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: item.checked === false ? true : false,
          }
        : item
    );

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const checkedItems = cartItems.filter((item) => item.checked !== false);

  const checkedCount = checkedItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = checkedItems.reduce((total, item) => {
    const priceNumber = Number(item.price.replace(/[^\d]/g, ""));

    return total + priceNumber * item.quantity;
  }, 0);

  const categoryData = {
    hiking: {
      title: "MOVE WITH NATURE",
      subtitle: "도시를 벗어나 자연의 리듬을 따라 걷다",
      heroImage: heroHiking,
      layout: "hiking",
      buttons: ["best", "shop"],
      position: "center",
    },

    running: {
      title: "RUN\nTHE CITY",
      subtitle: "도시의 리듬 위를 더 가볍게 달리다",
      heroImage: heroRunning,
      layout: "running",
      buttons: ["best"],
      position: "center",
    },

    training: {
      eyebrow: "FIND YOUR TRAIL",
      title: "2026 SUMMER TRAIL",
      subtitle: "자연은 우리의 놀이터,\n움직이는 순간, 모험이 시작된다.",
      heroImage: heroTraining,
      layout: "training",
      buttons: ["best", "shop"],
      position: "center",
    },

    camping: {
      title: "STAY OUTSIDE",
      subtitle: "자연 속 가장 편안한 순간을 위해",
      heroImage: heroCamping,
      layout: "camping",
      buttons: ["shop", "best"],
      position: "center",
    },

    climbing: {
      title: "CLIMBING ESSENTIALS",
      subtitle: "극한의 움직임을 위한 설계",
      heroImage: heroClimbing,
      layout: "climbing",
      buttons: ["shop"],
      position: "center 10%",
    },

    whitelabel: {
      title: "도시의 움직임을 위한\n가장 미니멀한 선택",
      subtitle: "",
      heroImage: heroWhiteLabel,
      layout: "whitelabel",
      buttons: ["shop"],
      position: "center 28%",
    },
  };

  const currentData = categoryData[currentCategory] || categoryData.hiking;

  return (
    <>
      <header className="hero-header">
        <Link to="/" className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <nav className="product-nav">
          <NavLink to="/products/hiking">Hiking</NavLink>
          <NavLink to="/products/running">Running</NavLink>
          <NavLink to="/products/training">Training</NavLink>
          <NavLink to="/products/camping">Camping</NavLink>
          <NavLink to="/products/climbing">Climbing</NavLink>
          <NavLink to="/products/whitelabel">White Label</NavLink>
        </nav>

        <div className="header-icons">
          <div className="search-box">
            <input
              type="text"
              placeholder="상품 검색"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />

            <FaSearch />
          </div>

          <button
            className="cart-button"
            onClick={() => {
              updateCartState();
              setIsCartOpen(true);
            }}
          >
            <FaShoppingCart />

            {savedCount > 0 && (
              <span className="hero-cart-count">{savedCount}</span>
            )}
          </button>
        </div>
      </header>

      <section
        className={`hero-banner hero-${currentData.layout}`}
        style={{
          backgroundImage: `url(${currentData.heroImage})`,
          backgroundPosition: currentData.position,
        }}
      >
        <div className="hero-content">
          <motion.div
            key={`text-${currentCategory}`}
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {currentData.eyebrow && (
              <strong className="hero-eyebrow">
                {currentData.eyebrow}
              </strong>
            )}

            <h1>{currentData.title}</h1>

            <p>{currentData.subtitle}</p>
          </motion.div>

          <motion.div
            key={`button-${currentCategory}`}
            className="hero-button-motion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.08,
            }}
          >
            <div className="hero-button-group">
              {currentData.buttons.includes("shop") && (
                <a
                  href="https://www.thenorthfacekorea.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn white-btn"
                >
                  SHOP NOW <span>→</span>
                </a>
              )}

              {currentData.buttons.includes("best") && (
                <Link to="/products/best" className="hero-btn black-btn">
                  베스트 보러가기 <span>→</span>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {isCartOpen && (
        <div
          className="product-cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`product-side-cart ${isCartOpen ? "open" : ""}`}>
        <div className="product-side-cart-header">
          <h3>장바구니</h3>

          <button onClick={() => setIsCartOpen(false)}>×</button>
        </div>

        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div className="product-cart-item" key={item.id}>
                <input
                  type="checkbox"
                  className="product-cart-check"
                  checked={item.checked !== false}
                  onChange={() => toggleCheckItem(item.id)}
                />

                <img src={item.image} alt={item.name} />

                <div className="product-cart-info">
                  <p>{item.name}</p>
                    <span>
                      {(
                        Number(item.price.replace(/[^\d]/g, "")) * item.quantity
                      ).toLocaleString()} 원
                    </span>

                  <div className="product-cart-quantity">
                    <button onClick={() => updateQuantity(item.id, "decrease")}>
                      -
                    </button>

                    <strong>{item.quantity}</strong>

                    <button onClick={() => updateQuantity(item.id, "increase")}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="product-cart-summary">
              <p>선택 수량 : {checkedCount}개</p>
              <strong>선택 금액 : {totalPrice.toLocaleString()} 원</strong>
            </div>
          </>
        ) : (
          <p className="product-empty-cart">아직 담긴 상품이 없습니다.</p>
        )}

        <button className="product-cart-clear-btn" onClick={handleClearCart}>
          장바구니 비우기
        </button>

        <button
          className="product-cart-close-btn"
          onClick={() => setIsCartOpen(false)}
        >
          계속 쇼핑하기
        </button>

        <button
          className="product-cart-checkout-btn"
          onClick={() => alert("결제 페이지로 이동합니다.")}
        >
          결제하기
        </button>

      </div>
    </>
  );
}

export default ProductHero;