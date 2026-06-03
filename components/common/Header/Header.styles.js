import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.header};
  transition: ${({ theme }) => theme.transition.base};

  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? 'blur(8px)' : 'none'};
`;

export const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 20px ${({ theme }) => theme.layout.contentPadding};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet} {
    padding: 16px ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const LogoImage = styled.img`
  width: 72px;
  height: 56px;
  object-fit: contain;

  ${({ theme }) => theme.media.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const Nav = styled.nav`
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const NavItem = styled.li`
  position: relative;

  button {
    font-family: ${({ theme }) => theme.fonts.en};
    font-size: 13px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    transition: ${({ theme }) => theme.transition.fast};
    padding: 4px 0;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      button::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${theme.colors.white};
      }
    `}

  ${({ theme }) => theme.media.tablet} {
    button {
      font-size: 16px;
    }
  }
`;

/* ===== 모바일 햄버거 버튼 ===== */

export const MobileMenuButton = styled.button`
  display: none;
  width: 28px;
  height: 24px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.header + 1};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const MobileMenuLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition.base};
  transform-origin: center;

  ${({ $open }) =>
    $open &&
    css`
      &:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
    `}
`;

/* ===== 모바일 메뉴 패널 ===== */

export const MobileNav = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet} {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.darkBg};
    align-items: center;
    justify-content: center;
    z-index: ${({ theme }) => theme.zIndex.header};
  }
`;