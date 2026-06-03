import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a;
  color: #fff;
  overflow-x: hidden;

  /* Header와 Footer가 배경 위에 표시되도록 */
  > header,
  > footer {
    position: relative;
    z-index: 2;
  }
`;

/* 산 배경 이미지 — 페이지 전체에 고정 */
export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  /* 어두운 오버레이 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.75) 50%
    );
  }
`;

export const Container = styled.main`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 120px 40px 100px;

  @media (max-width: 768px) {
    padding: 80px 20px 60px;
  }
`;

export const PageTitle = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 100px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.ko};
    font-size: 48px;
    font-weight: 800;
    letter-spacing: 0.05em;
    margin: 0 0 16px;
    color: #fff;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.ko};
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 60px;

    h1 {
      font-size: 32px;
    }
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 40%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 13px;
  letter-spacing: 0.1em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  transition: all 0.3s ease;


  span:first-child {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover span:first-child {
    transform: translateX(-4px);
  }

    @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-bottom: 20px;
  }
`;




export const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;

  /* 가운데 세로 라인 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 8%,
      rgba(255, 255, 255, 0.4) 92%,
      transparent 100%
    );
    transform: translateX(-1px);
    z-index: 0;
  }

  @media (max-width: 768px) {
    gap: 60px;

    &::before {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 180px;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-left: 60px;
  }
`;

export const ImageBox = styled(motion.div)`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #1a1a1a;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
    border-radius: 15px
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${({ $align }) =>
    $align === 'right'
      ? `align-items: flex-start; text-align: left;`
      : `align-items: flex-end; text-align: right;`}

  @media (max-width: 768px) {
    align-items: flex-start !important;
    text-align: left !important;
    gap: 24px;
  }
`;

export const Year = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 72px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #fff;
  line-height: 1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: 18px;
  line-height: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  white-space: pre-line;
  width: 100%;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 16px;
  height: 16px;
  background: #e63946;
  border-radius: 50%;
  margin-left: -8px;
  z-index: 2;
  box-shadow:
    0 0 20px rgba(230, 57, 70, 0.8),
    0 0 40px rgba(230, 57, 70, 0.4);
  pointer-events: none;


  @media (max-width: 768px) {
    left: 20px;
  }
`;

export const ScrollTopButton = styled(motion.button)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  z-index: 50;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
  }

  &:hover .arrow {
    transform: translateY(-3px);
  }

  .arrow {
    font-size: 16px;
    line-height: 1;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    font-size: 10px;
  }
`;