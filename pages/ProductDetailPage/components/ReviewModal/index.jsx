import { useState } from "react";
import "./ReviewModal.styles.css";

function ReviewModal({ isOpen, onClose }) {

  const [isWriting, setIsWriting] =
    useState(false);

  if (!isOpen) return null;

  return (
    <div className="review-overlay">
      <div className="review-modal">

        <div className="review-header">
          <h2>리뷰</h2>

          <button onClick={onClose}>
            ×
          </button>
        </div>

        <div className="review-content">

          <div className="review-summary">
            <h3>평균 ★ 4.8</h3>
            <p>리뷰 128개</p>
          </div>

          <div className="review-card">
            <h4>가볍고 정말 편해요</h4>

            <p className="review-product">
              COMPACT EX JKT
            </p>

            <p className="review-text">
              바람막이 느낌이 가볍고 활동할 때
              정말 편했습니다.
            </p>
          </div>

          <button
            className="review-write-btn"
            onClick={() => setIsWriting(!isWriting)}
          >
            리뷰 작성하기
          </button>

          {isWriting && (
            <div className="review-write-form">

              <input
                type="text"
                placeholder="리뷰 제목을 입력하세요"
              />

              <textarea
                placeholder="후기를 작성해주세요"
              />

              <button className="submit-review-btn">
                등록하기
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ReviewModal;