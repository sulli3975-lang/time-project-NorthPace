import styled, { css } from 'styled-components';



export const StoryWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 100px 0 160px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};

  /* 검정 → 흰색 그라디언트 (다음 ESG 흰색 섹션과 연결) */
  background: linear-gradient(
    180deg,
    #0a0a0a 0%,
    #0a0a0a 75%,
    #6a6a6a 90%,
    #ffffff 100%
  );

  ${({ theme }) => theme.media.tablet} {
    padding: 60px 0 100px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1100px;
  height: calc(100% - 260px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  overflow: hidden;
  z-index: 1;

  ${({ theme }) => theme.media.tablet} {
    top: 60px;
    height: calc(100% - 160px);
    left: ${({ theme }) => theme.layout.contentPaddingMobile};
    right: ${({ theme }) => theme.layout.contentPaddingMobile};
    transform: none;
    width: auto;
    border-radius: 16px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1100px;
  height: calc(100% - 260px);
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.62) 0%,
    rgba(0, 0, 0, 0.45) 40%,
    rgba(0, 0, 0, 0.68) 100%
  );
  z-index: 2;

  ${({ theme }) => theme.media.tablet} {
    top: 60px;
    height: calc(100% - 160px);
    left: ${({ theme }) => theme.layout.contentPaddingMobile};
    right: ${({ theme }) => theme.layout.contentPaddingMobile};
    transform: none;
    width: auto;
    border-radius: 16px;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px ${({ theme }) => theme.layout.contentPadding};

  ${({ theme }) => theme.media.tablet} {
    padding: 40px ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

export const Header = styled.div`
  margin-bottom: 80px;

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 60px;
  }
`;

export const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin-bottom: 16px;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodyLg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  color: ${({ theme }) => theme.colors.textOnDarkMuted};

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

export const TimelineArea = styled.div`
  position: relative;
  padding: 60px 0;

  ${({ theme }) => theme.media.tablet} {
    padding: 40px 0;
  }
`;

export const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 10%,
    rgba(255, 255, 255, 0.3) 90%,
    transparent 100%
  );
  transform: translateX(-50%);

  ${({ theme }) => theme.media.tablet} {
    left: 24px;
  }
`;

export const TimelineImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 11;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: ${({ theme }) => theme.fonts.en};
    font-size: ${({ theme }) => theme.fontSize.bodySm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textOnDarkMuted};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  }
`;

export const TimelineContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 8px 4px;

  /* Editorial accent marker — replaces the box */
  &::before {
    content: '';
    display: block;
    width: 56px;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.92;
    margin-bottom: 6px;
  }

  ${({ theme }) => theme.media.tablet} {
    gap: 14px;
    padding: 4px 0;

    &::before {
      width: 40px;
      align-self: flex-start !important;
    }
  }
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
  margin-bottom: 100px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ $align }) =>
    $align === 'right' &&
    css`
      ${TimelineImage} {
        order: 1;
      }
      ${TimelineContent} {
        order: 2;
        text-align: left;

        &::before {
          align-self: flex-start;
        }
      }
    `}

  ${({ $align }) =>
    $align === 'left' &&
    css`
      ${TimelineImage} {
        order: 2;
      }
      ${TimelineContent} {
        order: 1;
        text-align: right;

        &::before {
          align-self: flex-end;
        }
      }
    `}

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-left: 60px;
    margin-bottom: 60px;

    ${TimelineImage}, ${TimelineContent} {
      order: 0 !important;
      text-align: left !important;
    }
  }
`;

export const Year = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 96px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: -0.05em;
  line-height: 0.95;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 6px 24px rgba(0, 0, 0, 0.45));

  ${({ theme }) => theme.media.desktop} {
    font-size: 76px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 60px;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 46px;
  }
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.55);

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodyLg};
  }
`;

export const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  color: rgba(255, 255, 255, 0.94);
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.6);

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
  }
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 80px;

  ${({ theme }) => theme.media.tablet} {
    margin-top: 40px;
  }
`;

export const Closing = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.h4};
    margin-bottom: 24px;
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  transition: ${({ theme }) => theme.transition.base};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.white};
  }

  &:hover span:last-child {
    transform: translateX(4px);
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.en};
  transition: transform ${({ theme }) => theme.transition.base};
`;