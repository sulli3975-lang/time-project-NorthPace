import styled from 'styled-components';
import techBg from '../../../../assets/images/tech-bg.jpg';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray100};
  overflow: hidden;
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${techBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  /* 살짝 데스크 처리 — 콘텐츠 가독성 */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.15) 100%
    );
  }
`;