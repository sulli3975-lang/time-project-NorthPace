import styled, { css, keyframes } from 'styled-components';

const scrollPulse = keyframes`
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
`;

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.black};
`;

export const VideoLayer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.05) 25%,
    rgba(0, 0, 0, 0.45) 60%,
    rgba(0, 0, 0, 0.82) 100%
  );
  z-index: 2;
`;

export const ContentArea = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 ${({ theme }) => theme.layout.contentPadding} 100px;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.contentPaddingMobile} 80px;
  }
`;

export const ContentInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
  margin: 0 auto;
`;

export const SubCopy = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  margin-bottom: 16px;
  opacity: 0.85;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.caption};
    margin-bottom: 12px;
  }
`;

export const MainCopy = styled.h1`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 84px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  letter-spacing: -0.04em;
  text-shadow: 0 2px 32px rgba(0, 0, 0, 0.55);

  /* 한국어 라인은 Pretendard로 자동 처리 */
  &:lang(ko),
  span:lang(ko) {
    font-family: ${({ theme }) => theme.fonts.ko};
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: 64px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 40px;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 32px;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  margin-top: 36px;
  padding: 14px 36px;
  border: 1.5px solid rgba(255, 255, 255, 0.9);
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  transition: background ${({ theme }) => theme.transition.base},
              color ${({ theme }) => theme.transition.base};

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: ${({ theme }) => theme.colors.black};
  }

  ${({ theme }) => theme.media.tablet} {
    margin-top: 24px;
    padding: 12px 28px;
    font-size: ${({ theme }) => theme.fontSize.caption};
  }
`;

export const IndicatorArea = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
  margin: 32px auto 0;
`;

export const IndicatorList = styled.div`
  display: flex;
  gap: 12px;
`;

export const IndicatorItem = styled.button`
  width: 48px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  transition: ${({ theme }) => theme.transition.base};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  ${({ $active }) =>
    $active &&
    css`
      background: rgba(255, 255, 255, 1);
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  ${({ theme }) => theme.media.tablet} {
    width: 32px;
  }
`;

export const ScrollHint = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  span {
    font-family: ${({ theme }) => theme.fonts.en};
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
    opacity: 0.7;
  }

  ${({ theme }) => theme.media.tablet} {
    bottom: 16px;
  }
`;

export const ScrollHintLine = styled.div`
  width: 1px;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  animation: ${scrollPulse} 2s ease-in-out infinite;
`;