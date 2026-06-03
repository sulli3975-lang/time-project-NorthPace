import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFilter,
  FaShoppingCart,
  FaRegHeart,
  FaHeart,
  FaSearchPlus,
} from "react-icons/fa";
import "./ProductList.styles.css";

import hikingBest1 from "../../../../assets/images/products/hiking/hiking-best-1.jpg";
import hikingBest2 from "../../../../assets/images/products/hiking/hiking-best-2.jpg";
import hikingBest3 from "../../../../assets/images/products/hiking/hiking-best-3.jpg";
import hikingBest4 from "../../../../assets/images/products/hiking/hiking-best-4.jpg";

import hikingProduct1 from "../../../../assets/images/products/hiking/hiking-product-1.jpg";
import hikingProduct2 from "../../../../assets/images/products/hiking/hiking-product-2.jpg";
import hikingProduct3 from "../../../../assets/images/products/hiking/hiking-product-3.jpg";
import hikingProduct4 from "../../../../assets/images/products/hiking/hiking-product-4.jpg";
import hikingProduct5 from "../../../../assets/images/products/hiking/hiking-product-5.jpg";
import hikingProduct6 from "../../../../assets/images/products/hiking/hiking-product-6.jpg";
import hikingProduct7 from "../../../../assets/images/products/hiking/hiking-product-7.jpg";
import hikingProduct8 from "../../../../assets/images/products/hiking/hiking-product-8.jpg";

import ProductBanner from "../ProductBanner";
import ProductDetail from "../ProductDetail";

import camping1 from "../../../../assets/images/products/camping/camping-1.jpg";
import camping2 from "../../../../assets/images/products/camping/camping-2.jpg";
import camping3 from "../../../../assets/images/products/camping/camping-3.jpg";
import camping4 from "../../../../assets/images/products/camping/camping-4.jpg";

import white1 from "../../../../assets/images/products/whitelabel/whitelabel-1.png";
import white2 from "../../../../assets/images/products/whitelabel/whitelabel-2.png";
import white3 from "../../../../assets/images/products/whitelabel/whitelabel-3.jpg";
import white4 from "../../../../assets/images/products/whitelabel/whitelabel-4.jpg";

import running1 from "../../../../assets/images/products/running/running-1.jpg";
import running2 from "../../../../assets/images/products/running/running-2.png";
import running3 from "../../../../assets/images/products/running/running-3.jpg";
import running4 from "../../../../assets/images/products/running/running-4.jpg";

import training1 from "../../../../assets/images/products/training/trailrunning-1.jpg";
import training2 from "../../../../assets/images/products/training/trailrunning-2.jpg";
import training3 from "../../../../assets/images/products/training/trailrunning-3.jpg";
import training4 from "../../../../assets/images/products/training/trailrunning-4.jpg";

import climbing1 from "../../../../assets/images/products/climbing/climbing-1.jpg";
import climbing2 from "../../../../assets/images/products/climbing/climbing-2.jpg";
import climbing3 from "../../../../assets/images/products/climbing/climbing-3.jpg";
import climbing4 from "../../../../assets/images/products/climbing/climbing-4.jpg";

function ProductCard({ product, isBest }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleCartClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const savedItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const cartProduct = {
      id: product.id,
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

  const handleLikeClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setIsLiked((prev) => !prev);
  };

  return (
    <div className="product-card">
      <div className="product-image-box">
        {isBest && (
          <span
            className={`rank-badge ${
              product.rank === 1 ? "rank-first" : ""
            }`}
          >
            {product.rank}
          </span>
        )}

        <img src={product.image} alt={product.name} />

        {product.badge && (
          <span
            className={`product-badge ${
              product.badge === "SOLD OUT" ? "sold-out" : ""
            }`}
          >
            {product.badge}
          </span>
        )}

        <div className="product-overlay">
          <button type="button" onClick={handleCartClick}>
            <FaShoppingCart />
          </button>

          <Link to={`/product/${product.id}`}>
            <FaSearchPlus />
          </Link>

          <button
            type="button"
            className={`hover-like-btn ${isLiked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            {isLiked ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="product-text-link">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
    </div>
  );
}

function ProductList({ currentCategory }) {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");

  const categoryImages = {
    hiking: [hikingBest1, hikingBest2, hikingBest3, hikingBest4],
    running: [running1, running2, running3, running4],
    training: [training1, training2, training3, training4],
    camping: [camping1, camping2, camping3, camping4],
    climbing: [climbing1, climbing2, climbing3, climbing4],
    whitelabel: [white1, white2, white3, white4],
  };

  const currentImages =
    categoryImages[currentCategory] || categoryImages.hiking;

  const bestProducts = [
    {
      id: `${currentCategory}-best-1`,
      rank: 1,
      name: "COMPACT EX JKT",
      price: "135,150 원",
      image: currentImages[0],
    },
    {
      id: `${currentCategory}-best-2`,
      rank: 2,
      name: "DAYCAMP JACKET",
      price: "199,000 원",
      image: currentImages[1],
    },
    {
      id: `${currentCategory}-best-3`,
      rank: 3,
      name: "BIG SHOT",
      price: "169,000 원",
      image: currentImages[2],
    },
    {
      id: `${currentCategory}-best-4`,
      rank: 4,
      name: "NOVELTY DAYCAMP JACKET",
      price: "229,000 원",
      image: currentImages[3],
    },
  ];

  const jackets =
    currentCategory === "hiking"
      ? [
          {
            id: `${currentCategory}-jacket-1`,
            name: "Black jacket",
            price: "186,200 원",
            image: hikingProduct1,
          },
          {
            id: `${currentCategory}-jacket-2`,
            name: "Brown jacket",
            price: "186,200 원",
            image: hikingProduct2,
            badge: "NEW",
          },
          {
            id: `${currentCategory}-jacket-3`,
            name: "Gray jacket",
            price: "186,200 원",
            image: hikingProduct3,
          },
          {
            id: `${currentCategory}-jacket-4`,
            name: "Bogum black jacket",
            price: "199,000 원",
            image: hikingProduct4,
            badge: "SOLD OUT",
          },
          {
            id: `${currentCategory}-jacket-5`,
            name: "Mint jacket",
            price: "186,200 원",
            image: hikingProduct5,
          },
          {
            id: `${currentCategory}-jacket-6`,
            name: "White jacket",
            price: "169,200 원",
            image: hikingProduct6,
            badge: "BEST",
          },
          {
            id: `${currentCategory}-jacket-7`,
            name: "Black jacket",
            price: "169,200 원",
            image: hikingProduct7,
          },
          {
            id: `${currentCategory}-jacket-8`,
            name: "Apricot jacket",
            price: "186,200 원",
            image: hikingProduct8,
          },
        ]
      : [
          {
            id: `${currentCategory}-jacket-1`,
            name: "Black jacket",
            price: "186,200 원",
            image: currentImages[0],
          },
          {
            id: `${currentCategory}-jacket-2`,
            name: "Brown jacket",
            price: "186,200 원",
            image: currentImages[1],
            badge: "NEW",
          },
          {
            id: `${currentCategory}-jacket-3`,
            name: "Gray jacket",
            price: "186,200 원",
            image: currentImages[2],
          },
          {
            id: `${currentCategory}-jacket-4`,
            name: "Bogum black jacket",
            price: "199,000 원",
            image: currentImages[3],
            badge: "SOLD OUT",
          },
          {
            id: `${currentCategory}-jacket-5`,
            name: "Mint jacket",
            price: "186,200 원",
            image: currentImages[0],
          },
          {
            id: `${currentCategory}-jacket-6`,
            name: "White jacket",
            price: "169,200 원",
            image: currentImages[1],
            badge: "BEST",
          },
          {
            id: `${currentCategory}-jacket-7`,
            name: "Black jacket",
            price: "169,200 원",
            image: currentImages[2],
          },
          {
            id: `${currentCategory}-jacket-8`,
            name: "Apricot jacket",
            price: "186,200 원",
            image: currentImages[3],
          },
        ];

  const filteredJackets = jackets
    .filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      const priceA = Number(a.price.replace(/[^0-9]/g, ""));
      const priceB = Number(b.price.replace(/[^0-9]/g, ""));

      if (sortType === "low-price") return priceA - priceB;
      if (sortType === "high-price") return priceB - priceA;
      if (sortType === "name") return a.name.localeCompare(b.name);

      return 0;
    });

  return (
    <section className="product-list-section">
      <div className="section-line" />

      <div className="product-inner">
        <div className="best-title-row">
          <div>
            <h2>최신 베스트 셀렉션</h2>

            <p className="section-subtitle">
              이번 주 가장 사랑받은 베스트 아이템
            </p>
          </div>

          <Link to="/products/best" className="best-more-btn">
            베스트 셀렉션 보러가기 →
          </Link>
        </div>

        <div className="product-grid best-grid">
          {bestProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isBest={true}
            />
          ))}
        </div>
      </div>

      <ProductBanner />

      <ProductDetail />

      <div className="product-inner">
        <div className="product-title-row">
          <div>
            <h2>드라이벤트 자켓</h2>
            <p className="section-subtitle">
              나를 위한 가장 좋은 선택
            </p>
          </div>

          <div className="product-controls">
            <div className="product-sort-area">
              <select
                value={sortType}
                onChange={(event) => setSortType(event.target.value)}
              >
                <option value="default">기본 정렬</option>
                <option value="low-price">가격 낮은순</option>
                <option value="high-price">가격 높은순</option>
                <option value="name">이름순</option>
              </select>
            </div>

            <div className="product-search-area">
              <input
                type="text"
                placeholder="상품명을 검색하세요"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />

              <FaFilter className="search-filter-icon" />
            </div>
          </div>
        </div>

        <div className="product-grid jacket-grid">
          {filteredJackets.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isBest={false}
            />
          ))}
        </div>

        {filteredJackets.length === 0 && (
          <p className="no-product-message">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductList;