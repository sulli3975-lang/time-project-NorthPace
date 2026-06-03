import styled from 'styled-components';

export const TechWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 80px 0 120px;

  /* 중앙이 살짝 밝은 방사형 — 카드 유리 효과 극대화 */
  background: radial-gradient(
    ellipse at 50% 40%,
    #1c1c1c 0%,
    #111111 50%,
    #0a0a0a 100%
  );

  ${({ theme }) => theme.media.tablet} {
    padding: 60px 0 80px;
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentPadding};
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

export const LogoMark = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 60px;
  letter-spacing: -0.02em;

  ${({ theme }) => theme.media.tablet} {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 40px;
  margin-bottom: 60px;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 16px;
    gap: 12px;
    margin-bottom: 40px;
  }
`;

export const PrevButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 24px;
  cursor: pointer;
  padding: 12px;
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NextButton = styled(PrevButton)``;

/* 카드 플립 핵심 스타일 */
export const CardWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 460px;
  overflow: hidden;
  perspective: 1200px;   /* 3D 원근감 */

  ${({ theme }) => theme.media.tablet} {
    height: 360px;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1200px; 
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);

  /* flipped가 true면 Y축 180도 회전 */
  transform: ${({ $flipped }) =>
    $flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

/* 앞면/뒷면 공통 */
const CardBase = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 24px;

  /* 대각선 광택 그라데이션 */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.06) 25%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.04) 75%,
    rgba(255, 255, 255, 0.14) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);

  backface-visibility: hidden;
  overflow: hidden;
`;

export const CardFront = styled(CardBase)`
  display: flex;
  flex-direction: row;
`;

export const CardBack = styled(CardBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 80px;
  gap: 32px;
  transform: rotateY(180deg);   /* 처음부터 뒤집어서 숨겨둠 */
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 40px 32px;
    gap: 20px;
  }
`;

export const CardImage = styled.div`
  width: 45%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  flex-shrink: 0;
`;

export const CardFrontTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.02em;
  margin: 0;

  ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
  }
`;

export const CardFrontDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  color: rgba(255, 255, 255, 0.7);
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  margin: 0;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
  }
`;

export const CardBackTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 52px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.02em;
  margin: 0;

  ${({ theme }) => theme.media.tablet} {
    font-size: 36px;
  }
`;

export const CardBackDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;

export const CardBackDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodyLg};
  color: rgba(255, 255, 255, 0.75);
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  margin: 0;
  max-width: 700px;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

export const ClickButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.7);
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.05em;
  cursor: pointer;
  padding-bottom: 4px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ViewAllButton = styled.button`
  display: inline-block;
  padding: 16px 56px;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 32px;
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.base};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: #111111;
    border-color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;