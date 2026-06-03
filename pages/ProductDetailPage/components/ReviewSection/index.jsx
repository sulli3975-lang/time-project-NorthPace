import { useEffect, useState } from "react";
import "./ReviewSection.styles.css";

function ReviewSection() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("productReviews")) || [];
    setReviews(savedReviews);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nickname.trim() || !content.trim()) {
      alert("닉네임과 리뷰 내용을 입력해주세요.");
      return;
    }

    const newReview = {
      id: Date.now(),
      nickname,
      content,
      rating,
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [newReview, ...reviews];

    setReviews(updatedReviews);
    localStorage.setItem("productReviews", JSON.stringify(updatedReviews));

    setNickname("");
    setContent("");
    setRating(5);
  };

  const handleDelete = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);

    setReviews(updatedReviews);
    localStorage.setItem("productReviews", JSON.stringify(updatedReviews));
  };

  return (
    <section className="review-section">
      <h2>Review</h2>
      <p className="review-subtitle">
        상품을 사용한 느낌을 간단히 남겨보세요.
      </p>

      <form className="review-form" onSubmit={handleSubmit}>
        <div className="review-row">
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />

          <select
            value={rating}
            onChange={(event) => setRating(Number(event.target.value))}
          >
            <option value={5}>★★★★★</option>
            <option value={4}>★★★★☆</option>
            <option value={3}>★★★☆☆</option>
            <option value={2}>★★☆☆☆</option>
            <option value={1}>★☆☆☆☆</option>
          </select>
        </div>

        <textarea
          placeholder="리뷰를 작성해주세요."
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <button type="submit">리뷰 작성하기</button>
      </form>

      <div className="review-list">
        {reviews.length === 0 ? (
          <p className="empty-review">아직 작성된 리뷰가 없습니다.</p>
        ) : (
          reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-card-top">
                <strong>{review.nickname}</strong>
                <span>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
              </div>

              <p>{review.content}</p>

              <div className="review-card-bottom">
                <small>{review.date}</small>
                <button onClick={() => handleDelete(review.id)}>삭제</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ReviewSection;