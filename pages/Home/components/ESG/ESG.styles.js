import styled, { keyframes, css } from "styled-components";

// ─────────────────────────────────────────────────────────────
// Keyframes — 슬라이드 전환 애니메이션
// ─────────────────────────────────────────────────────────────
const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ─────────────────────────────────────────────────────────────
// 섹션 전체 래퍼
// ─────────────────────────────────────────────────────────────
export const Section = styled.section`
  background: linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 100px 0 120px;
  font-family: -apple-system, "Pretendard", "Apple SD Gothic Neo", sans-serif;
  color: #1a1a1a;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

// ─────────────────────────────────────────────────────────────
// 헤더 (타이틀 + 서브타이틀)
// ─────────────────────────────────────────────────────────────
export const Header = styled.header`
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  font-family: "Helvetica Neue", "Arial Black", sans-serif;
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin: 0 0 32px;
  color: #0a0a0a;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 1.9;
  color: #555;
  margin: 0;
  max-width: 720px;
  font-weight: 400;
`;

// ─────────────────────────────────────────────────────────────
// 캐러셀 영역 (화살표 + 그리드)
// ─────────────────────────────────────────────────────────────
export const CarouselWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ArrowButton = styled.button`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #999;
  background: transparent;
  color: #1a1a1a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  padding: 0;

  &:hover {
    background: #1a1a1a;
    color: #fff;
    border-color: #1a1a1a;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  min-width: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// ─────────────────────────────────────────────────────────────
// 카드 — direction prop으로 슬라이드 방향 제어
// cardIndex로 stagger(시차) 적용
// ─────────────────────────────────────────────────────────────
export const Card = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  background: #333;

  animation: ${(props) => (props.$direction === 1 ? slideInRight : slideInLeft)}
    0.55s cubic-bezier(0.22, 1, 0.36, 1) backwards;
  animation-delay: ${(props) => props.$cardIndex * 0.08}s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
  }
`;

export const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

// overlay prop: "dark" | "light" | "none"
export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;

  ${(props) =>
    props.$overlay === "dark" &&
    css`
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.25) 50%,
        rgba(0, 0, 0, 0.65) 100%
      );
    `}

  ${(props) =>
    props.$overlay === "light" &&
    css`
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.25) 0%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.45) 100%
      );
    `}

  ${(props) =>
    props.$overlay === "none" &&
    css`
      background: transparent;
    `}
`;

export const CardContent = styled.div`
  position: absolute;
  inset: 0;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const CardLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
  opacity: 0.95;
`;

export const CardValue = styled.div`
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-size: clamp(28px, 2.5vw, 40px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: auto;
  font-variant-numeric: tabular-nums;
`;

export const CardSuffix = styled.span`
  font-size: 0.85em;
  font-weight: 400;
  margin-left: 2px;
`;

export const CardDesc = styled.div`
  font-size: 14px;
  line-height: 1.7;
  text-align: center;
  margin-top: auto;
  padding-bottom: 8px;
  opacity: 0.92;
  font-weight: 300;
`;

export const DescBreak = styled.div`
  height: 10px;
`;

// ─────────────────────────────────────────────────────────────
// 인디케이터 (하단 슬라이드 표시)
// ─────────────────────────────────────────────────────────────
export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 48px;
`;

export const Indicator = styled.button`
  width: ${(props) => (props.$active ? "48px" : "32px")};
  height: 2px;
  background: ${(props) => (props.$active ? "#0a0a0a" : "#c0c0c0")};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.$active ? "#0a0a0a" : "#888")};
  }
`;