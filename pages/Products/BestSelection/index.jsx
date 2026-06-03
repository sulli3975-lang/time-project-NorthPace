import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaChevronLeft,
  FaFilter,
  FaRegHeart,
  FaHeart,
  FaSearchPlus,
  FaArrowUp,
} from "react-icons/fa";


import Footer from "../../../components/common/Footer";
import "./BestSelection.styles.css";

import logo from "../../../assets/images/common/north-logo1.png";

/* hiking */
import hiking1 from "../../../assets/images/best/hiking/hiking-best-1.jpg";
import hiking2 from "../../../assets/images/best/hiking/hiking-best-2.jpg";
import hiking3 from "../../../assets/images/best/hiking/hiking-best-3.jpg";
import hiking4 from "../../../assets/images/best/hiking/hiking-best-4.jpg";

/* running */
import running1 from "../../../assets/images/best/running/running-best-1.jpg";
import running2 from "../../../assets/images/best/running/running-best-2.jpg";
import running3 from "../../../assets/images/best/running/running-best-3.jpg";
import running4 from "../../../assets/images/best/running/running-best-4.jpg";

/* training */
import training1 from "../../../assets/images/best/training/training-best-1.jpg";
import training2 from "../../../assets/images/best/training/training-best-2.jpg";
import training3 from "../../../assets/images/best/training/training-best-3.jpg";
import training4 from "../../../assets/images/best/training/training-best-4.jpg";

/* camping */
import camping1 from "../../../assets/images/best/camping/camping-best-1.jpg";
import camping2 from "../../../assets/images/best/camping/camping-best-2.jpg";
import camping3 from "../../../assets/images/best/camping/camping-best-3.jpg";
import camping4 from "../../../assets/images/best/camping/camping-best-4.jpg";

/* climbing */
import climbing1 from "../../../assets/images/best/climbing/climbing-best-1.jpg";
import climbing2 from "../../../assets/images/best/climbing/climbing-best-2.jpg";
import climbing3 from "../../../assets/images/best/climbing/climbing-best-3.jpg";
import climbing4 from "../../../assets/images/best/climbing/climbing-best-4.jpg";

/* whitelabel */
import white1 from "../../../assets/images/best/whitelabel/whitelabel-best-1.jpg";
import white2 from "../../../assets/images/best/whitelabel/whitelabel-best-2.jpg";
import white3 from "../../../assets/images/best/whitelabel/whitelabel-best-3.jpg";
import white4 from "../../../assets/images/best/whitelabel/whitelabel-best-4.jpg";

const categoryTabs = [
  { key: "hiking", label: "하이킹" },
  { key: "running", label: "러닝" },
  { key: "training", label: "트래킹러닝" },
  { key: "camping", label: "캠핑" },
  { key: "climbing", label: "클라이밍" },
  { key: "whitelabel", label: "화이트라벨" },
];

const productImages = {
  hiking: [hiking1, hiking2, hiking3, hiking4],
  running: [running1, running2, running3, running4],
  training: [training1, training2, training3, training4],
  camping: [camping1, camping2, camping3, camping4],
  climbing: [climbing1, climbing2, climbing3, climbing4],
  whitelabel: [white1, white2, white3, white4],
};

const productNames = {
  hiking: [
    ["COMPACT EX JKT", "135,150 원"],
    ["DAYCAMP JACKET", "199,000 원"],
    ["BIG SHOT", "169,000 원"],
    ["NOVELTY DAYCAMP JACKET", "229,000 원"],
  ],
  running: [
    ["RUNNING SHOES", "159,000 원"],
    ["LIGHT JACKET", "189,000 원"],
    ["RUNNING PACK", "99,000 원"],
    ["CITY CAP", "45,000 원"],
  ],
  training: [
    ["TRAIL JACKET", "199,000 원"],
    ["TRAIL SHOES", "169,000 원"],
    ["TRAIL BAG", "129,000 원"],
    ["SUMMER TEE", "69,000 원"],
  ],
  camping: [
    ["STORMBREAK 1", "270,000 원"],
    ["TNF CAMP CHAIR SLIM", "219,000 원"],
    ["TNF CAMPTABLE S", "99,000 원"],
    ["LAND ARMS MUG 350", "49,000 원"],
  ],
  climbing: [
    ["CLIMBING JACKET", "199,000 원"],
    ["CLIMBING PANTS", "159,000 원"],
    ["CLIMBING BAG", "129,000 원"],
    ["CLIMBING TEE", "69,000 원"],
  ],
  whitelabel: [
    ["WHITE LABEL JACKET", "169,000 원"],
    ["CITY WIND JACKET", "159,000 원"],
    ["MINIMAL HOODIE", "129,000 원"],
    ["LIGHT PANTS", "109,000 원"],
  ],
};

function BestSelection() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("camping");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [likedItems, setLikedItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  
  const [showTopButton, setShowTopButton] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [savedCount, setSavedCount] = useState(
    Number(localStorage.getItem("cartCount")) || 0
  );

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

    useEffect(() => {
    const updateCart = () => {
      const newItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];

      const newCount =
        Number(localStorage.getItem("cartCount")) || 0;

      setCartItems(newItems);
      setSavedCount(newCount);
    };

    window.addEventListener("storage", updateCart);

    return () => {
      window.removeEventListener("storage", updateCart);
    };
  }, []);

    useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
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

  const currentImages = productImages[activeCategory];
  const currentNames = productNames[activeCategory];

  const allProducts = Array.from({ length: 30 }, (_, index) => {
    const itemIndex = index % 4;

    return {
      id: index + 1,
      rank: index + 1,
      image: currentImages[itemIndex],
      name: currentNames[itemIndex][0],
      price: currentNames[itemIndex][1],
    };
  });

const products = allProducts.slice(
  (currentPage - 1) * 16,
  currentPage * 16
);

  const handleCartClick = (event, product) => {
    event.preventDefault();
    event.stopPropagation();

    const savedItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const cartProduct = {
      id: `${activeCategory}-best-${product.rank}`,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    const existingItem = savedItems.find(
      (item) => item.id === cartProduct.id
    );

    let updatedItems;

    if (existingItem) {
      updatedItems = savedItems.map((item) =>
        item.id === cartProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...savedItems, cartProduct];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    const totalCount = updatedItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    localStorage.setItem("cartCount", totalCount);

    window.dispatchEvent(new Event("storage"));

    alert(`${product.name} 상품이 장바구니에 담겼습니다.`);
  };

  const handleLikeClick = (event, productId) => {
    event.stopPropagation();

    setLikedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleDetailClick = (event, productId) => {
    event.stopPropagation();
    navigate(`/product/${productId}`);
  };

    const updateQuantity = (id, type) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          quantity:
            type === "increase"
              ? item.quantity + 1
              : item.quantity - 1,
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
        ? { ...item, checked: item.checked === false ? true : false }
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

  const handleCheckout = () => {
    alert("결제 페이지로 이동합니다.");
  };

  return (
    <main className="best-page">
      <header className="best-header">
        <Link to="/">
          <img src={logo} alt="THE NORTH FACE" className="best-logo" />
        </Link>

        <div className="best-header-icons">
          <div className="best-search-box">
            <input
              type="text"
              placeholder="상품 검색"
            />
            <FaSearch />
          </div>

            <button
              className="best-cart-button"
              onClick={() => {
                const newItems =
                  JSON.parse(localStorage.getItem("cartItems")) || [];

                const newCount =
                  Number(localStorage.getItem("cartCount")) || 0;

                setCartItems(newItems);
                setSavedCount(newCount);
                setIsCartOpen(true);
              }}
            >
              <FaShoppingCart />

              {savedCount > 0 && (
                <span className="best-cart-count">{savedCount}</span>
              )}
            </button>

        </div>
      </header>

      <section className="best-title-section">
        <Link to="/products" className="best-back-btn">
          <FaChevronLeft />
        </Link>

        <h1>최신 베스트 셀렉션</h1>
        <p>이번 주 가장 사랑받은 베스트 TOP 30</p>
      </section>

      <nav className="best-category-nav">
        {categoryTabs.map((category) => (
          <button
            key={category.key}
            className={activeCategory === category.key ? "active" : ""}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <section className={`best-content ${isFilterOpen ? "filter-open" : ""}`}>
        <aside className="best-filter-area">
          <button
            className="filter-toggle-btn"
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            필터 {isFilterOpen ? "숨기기" : "표시"} <FaFilter />
          </button>

          {isFilterOpen && (
            <div className="filter-panel">
              <h3>필터</h3>

              <div className="filter-group">
                <h4>성별</h4>
                <label><span>남성</span><input type="checkbox" /></label>
                <label><span>여성</span><input type="checkbox" /></label>
                <label><span>남녀공용</span><input type="checkbox" /></label>
              </div>

              <div className="filter-group">
                <h4>의류 사이즈</h4>
                <label><span>080(XS)</span><input type="checkbox" /></label>
                <label><span>085(S)</span><input type="checkbox" /></label>
                <label><span>090(M)</span><input type="checkbox" /></label>
                <label><span>095(L)</span><input type="checkbox" /></label>
                <label><span>100(XL)</span><input type="checkbox" /></label>
                <label><span>105(XXL)</span><input type="checkbox" /></label>
              </div>

              <div className="filter-group">
                <h4>가격대</h4>
                <label><span>0 - 50,000 원</span><input type="checkbox" /></label>
                <label><span>50,000 - 100,000 원</span><input type="checkbox" /></label>
                <label><span>100,000 - 150,000 원</span><input type="checkbox" /></label>
                <label><span>150,000 - 200,000 원</span><input type="checkbox" /></label>
                <label><span>200,000 원 +</span><input type="checkbox" /></label>
              </div>
            </div>
          )}
        </aside>

        <div className="best-product-area">
          <div className="best-grid">
            {products.map((product) => {
              const isLiked = likedItems.includes(product.id);

              return (
                <article className="best-card" key={product.rank}>
                  <div className="best-image-box">
                    <span className={product.rank === 1 ? "rank first" : "rank"}>
                      {product.rank}
                    </span>

                    <img src={product.image} alt={product.name} />

                    <div className="best-hover-icons">
                      <button
                        type="button"
                        onClick={(event) => handleCartClick(event, product)}
                        aria-label="장바구니"
                      >
                        <FaShoppingCart />
                      </button>

                      <button
                        type="button"
                        onClick={(event) =>
                          handleDetailClick(event, product.id)
                        }
                        aria-label="자세히 보기"
                      >
                        <FaSearchPlus />
                      </button>

                      <button
                        type="button"
                        className={isLiked ? "liked" : ""}
                        onClick={(event) =>
                          handleLikeClick(event, product.id)
                        }
                        aria-label="좋아요"
                      >
                        {isLiked ? <FaHeart /> : <FaRegHeart />}
                      </button>
                    </div>
                  </div>

                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </article>
              );
            })}
          </div>

          <div className="best-pagination">
            <button
              className={currentPage === 1 ? "active" : ""}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>

            <button
              className={currentPage === 2 ? "active" : ""}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
          </div>
        </div>
      </section>

      <Footer />
        {isCartOpen && (
          <div
            className="best-cart-overlay"
            onClick={() => setIsCartOpen(false)}
          />
        )}

        <div className={`best-side-cart ${isCartOpen ? "open" : ""}`}>
          <div className="best-side-cart-header">
            <h3>장바구니</h3>
            <button onClick={() => setIsCartOpen(false)}>×</button>
          </div>

          {cartItems.length > 0 ? (
  <>
          {cartItems.map((item) => (
            <div className="best-cart-item" key={item.id}>
              <input
                type="checkbox"
                className="best-cart-check"
                checked={item.checked !== false}
                onChange={() => toggleCheckItem(item.id)}
              />

              <img src={item.image} alt={item.name} />

              <div className="best-cart-info">
                <p>{item.name}</p>
                <span>
                  {(
                    Number(item.price.replace(/[^\d]/g, "")) * item.quantity
                  ).toLocaleString()} 원
                </span>

                <div className="best-cart-quantity">
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

          <div className="best-cart-summary">
            <p>선택 수량 : {checkedCount}개</p>
            <strong>선택 금액 : {totalPrice.toLocaleString()} 원</strong>
          </div>
        </>
      ) : (
        <p className="best-empty-cart">
          아직 담긴 상품이 없습니다.
        </p>
      )}

          <button
            className="best-cart-clear-btn"
            onClick={() => {
              localStorage.removeItem("cartItems");
              localStorage.setItem("cartCount", 0);
              setCartItems([]);
              setSavedCount(0);
            }}
          >
            장바구니 비우기
          </button>

          <button
            className="best-cart-close-btn"
            onClick={() => setIsCartOpen(false)}
          >
            계속 쇼핑하기
          </button>

          <button
            className="best-cart-checkout-btn"
            onClick={handleCheckout}
          >
            결제하기
          </button>

        </div>

        {showTopButton && (
          <button
            className="best-top-button"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        )}

    </main>
  );
}

export default BestSelection;