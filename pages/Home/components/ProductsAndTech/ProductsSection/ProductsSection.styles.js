import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 120px 0 100px;
  background: #111111;

  ${({ theme }) => theme.media.tablet} {
    padding: 80px 0 60px;
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentPadding};

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 48px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 56px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;

  ${({ theme }) => theme.media.tablet} {
    font-size: 36px;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  color: rgba(255, 255, 255, 0.6);

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

export const Card = styled.button`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;     /* 인스타 스토리 비율 */
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background: #222222;
  border: none;
  padding: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  ${({ theme }) => theme.media.tablet} {
    border-radius: 14px;
  }
`;

export const CardImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease;

  /* 하단 그라데이션 — 텍스트 가독성 */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 40%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardLabel = styled.span`
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 2;
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
    bottom: 16px;
    left: 16px;
  }
`;