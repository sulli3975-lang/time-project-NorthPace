import styled from 'styled-components';
import newsroomBg from '../../../../assets/images/newsroom-bg.png';

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${newsroomBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  transition: transform 0.8s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.18) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    transition: background 0.6s ease;
  }
`;

export const NewsroomWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover ${Background} {
    transform: scale(1.04);
  }

  &:hover ${Background}::after {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.62) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.72) 100%
    );
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentPadding};
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  ${({ theme }) => theme.media.tablet} {
    gap: 32px;
  }
`;

export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 120px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: -0.02em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  text-shadow:
    0 6px 32px rgba(0, 0, 0, 0.75),
    0 2px 10px rgba(0, 0, 0, 0.55);
  transition: text-shadow 0.4s ease, letter-spacing 0.5s ease;

  ${NewsroomWrapper}:hover & {
    text-shadow:
      0 10px 48px rgba(0, 0, 0, 0.9),
      0 4px 14px rgba(0, 0, 0, 0.7);
    letter-spacing: 0;
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: 96px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 56px;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 40px;
  }
`;

export const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 36px;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 32px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.base};

  ${NewsroomWrapper}:hover & {
    border-color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);

    span:last-child {
      transform: translateX(4px);
    }
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
    padding: 14px 28px;
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.en};
  transition: transform ${({ theme }) => theme.transition.base};
`;
