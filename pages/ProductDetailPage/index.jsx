import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./ProductDetailPage.styles.css";


import logo from "../../assets/images/logo.png";

import thumb1 from "../../assets/images/detail/detail-thumb-1.jpg";
import thumb2 from "../../assets/images/detail/detail-thumb-2.jpg";
import thumb3 from "../../assets/images/detail/detail-thumb-3.jpg";
import thumb4 from "../../assets/images/detail/detail-thumb-4.jpg";
import thumb5 from "../../assets/images/detail/detail-thumb-5.jpg";

import { FaSearch, FaShoppingCart } from "react-icons/fa";

import Footer from "../../components/common/Footer";

import ReviewSection from "./components/ReviewSection";

function ProductDetailPage() {
  const galleryImages = [thumb1, thumb2, thumb3, thumb4, thumb5];
  const productPrice = 135150;

  const [mainImages, setMainImages] = useState([thumb1, thumb2]);
  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem("cartCount");

    return savedCount ? Number(savedCount) : 0;
  });
  const [isLiked, setIsLiked] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [showTopButton, setShowTopButton] = useState(false);
  

  const isCartAdded = cartCount > 0;
  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = Number(
      item.price.replace(/[^\d]/g, "")
    );

    return total + priceNumber * item.quantity;
  }, 0);

  const handleCartClick = () => {
    const newItem = {
      id: "detail-compact-ex-jkt",
      name: "COMPACT EX JKT",
      price: "135,150 원",
      image: thumb1,
      quantity: 1,
    };

    const savedItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItem = savedItems.find(
      (item) => item.id === newItem.id
    );

    let updatedItems;

    if (existingItem) {
      updatedItems = savedItems.map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...savedItems, newItem];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    const totalCount = updatedItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    localStorage.setItem("cartCount", totalCount);

    setCartItems(updatedItems);
    setCartCount(totalCount);
    setShowNotice(true);
    setIsCartOpen(true);

    setTimeout(() => {
      setShowNotice(false);
    }, 1800);
  };

  const handleIncreaseCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleDecreaseCart = () => {
    setCartCount((prev) => Math.max(prev - 1, 0));
  };

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartCount", 0);

    setCartItems([]);
    setCartCount(0);
  };

  const handleBuyClick = () => {
    alert("구매 페이지로 이동합니다.");
  };

  const reviewRef = useRef(null);

  const handleReviewScroll = () => {
    reviewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    useEffect(() => {
    if (isCartOpen) {
      const savedItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];

      setCartItems(savedItems);

      const totalCount = savedItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      setCartCount(totalCount);
    }
  }, [isCartOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };  

  return (
    <main className="detail-page">
      <header className="detail-header">
        <Link to="/">
          <img
            src={logo}
            alt="THE NORTH FACE"
            className="detail-logo"
          />
        </Link>

        <div className="detail-header-icons">
          <div className="detail-search-box">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
            />
            <FaSearch />
          </div>

          <button
            className="detail-cart-button"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart />

            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
        </div>
      </header>

      <div className="back-to-products">
        <Link to="/products">← 상품 목록으로 돌아가기</Link>
      </div>

      <section className="detail-top">
        <div className="detail-gallery">
          <div className="main-images">
            <img
              src={mainImages[0]}
              alt="main product 1"
              onClick={() => setSelectedImage(mainImages[0])}
            />

            <img
              src={mainImages[1]}
              alt="main product 2"
              onClick={() => setSelectedImage(mainImages[1])}
            />
          </div>

          <div className="thumbnail-list">
            {galleryImages.map((image, index) => {
              const nextImage = galleryImages[(index + 1) % galleryImages.length];

              return (
                <img
                  key={index}
                  src={image}
                  alt={`thumbnail-${index + 1}`}
                  onMouseEnter={() => setMainImages([image, nextImage])}
                />
              );
            })}
          </div>
        </div>
        <div className="detail-info">
          <h1>COMPACT EX JKT</h1>

          <p className="detail-price">135,150 원</p>

          <div className="benefit-row">
            <span>적립</span>
            <strong>5,380P</strong>
          </div>

          <div className="benefit-row">
            <span>카드 혜택</span>
            <strong>
              행사카드 결제 시
              <br />
              최대 만원 할인
            </strong>
          </div>

          <div className="top-button-group">
            <button className="top-cart-btn" onClick={handleCartClick}>
              장바구니 담기
            </button>

            <button className="top-buy-btn" onClick={handleBuyClick}>
              구매하기
            </button>
          </div>
        </div>
      </section>

      <section className="detail-tabs">
        <span>상세정보</span>
        <span>추천상품</span>
        <span>상품리뷰</span>
        <span>상품 문의</span>
        <span>교환/반품/배송</span>
      </section>

      <section className="detail-description">
        <h2>COMPACT EX JKT</h2>

        <p>
          바람이 스치는 순간에도
          <br />
          몸은 여전히 편안합니다.
        </p>

        <p>
          COMPACT EX JKT는 단순한 아우터가 아니라,
          <br />
          환경에 맞서면서도 자유롭게 움직일 수 있도록 설계된 하나의
          도구입니다.
        </p>

        <p>
          비가 내리는 날에도,
          <br />
          눈보라가 부는 순간에도
          <br />
          외부의 수분은 차단하고 내부의 습기는 빠르게 배출합니다.
        </p>

        <p>
          완전 방수 구조와 투습 기능이 만나
          <br />
          쾌적함을 유지하며,
          <br />
          장시간 착용에도 답답함이 남지 않습니다.
        </p>
      </section>

      <section className="detail-content-grid">
        <img
          src={thumb1}
          alt="제품 착용 이미지"
          className="grid-img img-left"
          onClick={() => setSelectedImage(thumb1)}
        />

        <img
          src={thumb3}
          alt="제품 앞면 이미지"
          className="grid-img img-right"
          onClick={() => setSelectedImage(thumb3)}
        />

        <img
          src={thumb4}
          alt="제품 뒷면 이미지"
          className="grid-img img-left-small"
          onClick={() => setSelectedImage(thumb4)}
        />

        <img
          src={thumb2}
          alt="제품 뒷면 착용 이미지"
          className="grid-img img-right-tall"
          onClick={() => setSelectedImage(thumb2)}
        />
      </section>

      <section className="detail-description">
        <h2>기능을 넘어, 움직임을 완성하다</h2>

        <p>가벼운 무게와 컴팩트한 설계는 몸의 흐름을 방해하지 않습니다.</p>

        <p>
          걷는 순간,
          <br />
          오르는 순간,
          <br />
          몸을 숙이고 다시 일어나는 모든 동작 속에서도 자연스럽게
          따라옵니다.
        </p>

        <p>
          활동성을 고려한 입체 패턴은 단순한 ‘편안함’을 넘어
          <br />
          움직임 자체를 더 자유롭게 만듭니다.
        </p>

        <h2>보온성과 실용성, 그 균형</h2>

        <p>외부의 차가운 공기를 막아내고 내부의 따뜻함을 유지하는 구조.</p>

        <p>
          필요할 때는 체온을 지켜주고, 움직일 때는 열을 자연스럽게
          흘려보냅니다.
        </p>

        <p>계절과 상황을 가리지 않는 균형 잡힌 퍼포먼스.</p>
      </section>

      <section className="detail-focus-image">
        <img
          src={thumb5}
          alt="제품 디테일 이미지"
          onClick={() => setSelectedImage(thumb5)}
        />
      </section>

      <section className="detail-description last">
        <h2>당신의 움직임을 제한하지 않는 선택</h2>

        <p>
          COMPACT EX JKT는
          <br />
          날씨를 신경 쓰지 않게 만들고,
          <br />
          환경을 고민하지 않게 만듭니다.
        </p>

        <p>
          그저,
          <br />
          앞으로 나아가면 됩니다.
        </p>
      </section>

      <div className="detail-bottom-bar">
      <button
        className="review-btn"
        onClick={handleReviewScroll}
      >
        리뷰 보기
      </button>

        <button
          className={`heart-btn ${isLiked ? "active" : ""}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? "♥" : "♡"}
        </button>

        <button
          className={`cart-btn ${isCartAdded ? "active" : ""}`}
          onClick={handleCartClick}
        >
          {isCartAdded ? "추가 담기" : "장바구니"}
        </button>

        <button className="buy-btn" onClick={handleBuyClick}>
          구매하기
        </button>
      </div>

      {showNotice && (
        <div className="cart-notice">장바구니에 상품이 담겼습니다.</div>
      )}

      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`side-cart ${isCartOpen ? "open" : ""}`}>
        <div className="side-cart-header">
          <h3>장바구니</h3>

          <button onClick={() => setIsCartOpen(false)}>×</button>
        </div>

        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div className="side-cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="side-cart-info">
                  <p>{item.name}</p>
                  <span>{item.price}</span>
                  <strong>수량 : {item.quantity}</strong>
                </div>
              </div>
            ))}

            <div className="side-cart-price">
              <span>총 수량</span>
              <strong>{cartCount}개</strong>
            </div>
          </>
        ) : (
          <p className="empty-cart-text">장바구니가 비어 있습니다.</p>
        )}

        <div className="side-cart-buttons">
          <button className="clear-btn" onClick={handleClearCart}>
            장바구니 비우기
          </button>

          <button
            className="continue-btn"
            onClick={() => setIsCartOpen(false)}
          >
            계속 쇼핑하기
          </button>

          <button className="checkout-btn" onClick={handleBuyClick}>
            구매하기
          </button>
        </div>
      </div>

        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <div className="image-modal-content">
              <button
                className="image-modal-close"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              <img src={selectedImage} alt="확대 이미지" />
            </div>
          </div>
        )}

        <div ref={reviewRef}>
          <ReviewSection />
        </div>

        <Footer />

    {showTopButton && (
      <button
        className="detail-top-button"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    )}

    </main>
  );
}

export default ProductDetailPage;