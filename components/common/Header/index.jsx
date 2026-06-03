import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../../../assets/images/logo.png';

import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  LogoImage,
  Nav,
  NavList,
  NavItem,
  MobileMenuButton,
  MobileMenuLine,
  MobileNav,
} from './Header.styles';

const NAV_ITEMS = [
  { label: 'HOME', sectionId: 'home' },
  { label: 'BRAND', sectionId: 'brand' },
  { label: 'SUSTAINABILITY', sectionId: 'sustainability' },
  { label: 'PRODUCTS', sectionId: 'products-section' },
  { label: 'TECHNOLOGY', sectionId: 'technology-section' },
  { label: 'NEWSROOM', sectionId: 'newsroom-section' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // 스크롤 시 헤더 배경 변화 + 현재 섹션 감지
useEffect(() => {
  // 서브 페이지에서는 항상 scrolled 상태로 (어두운 배경)
  if (location.pathname !== '/') {
    setScrolled(true);
    return;
  }

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

    const sections = NAV_ITEMS.map((item) => item.sectionId);
    const scrollPosition = window.scrollY + 150;

    let currentSection = sections[0];
    for (const id of sections) {
      const element = document.getElementById(id);
      if (element) {
        const elementTop =
          element.getBoundingClientRect().top + window.scrollY;
        if (elementTop <= scrollPosition) {
          currentSection = id;
        }
      }
    }
    setActiveSection(currentSection);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [location.pathname]);

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // 메뉴 클릭 → 해당 섹션으로 부드럽게 스크롤
  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
    setMobileOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <HeaderWrapper $scrolled={scrolled}>
      <HeaderInner>
        <Logo
          as="button"
          onClick={() => handleNavClick('home')}
          aria-label="홈으로"
        >
          <LogoImage src={logoImg} alt="The North Face" />
        </Logo>

        <Nav>
          <NavList>
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.sectionId}
                $active={activeSection === item.sectionId}
              >
                <button onClick={() => handleNavClick(item.sectionId)}>
                  {item.label}
                </button>
              </NavItem>
            ))}
          </NavList>
        </Nav>

        <MobileMenuButton
          onClick={() => setMobileOpen(!mobileOpen)}
          $open={mobileOpen}
          aria-label="메뉴 열기"
        >
          <MobileMenuLine $open={mobileOpen} />
          <MobileMenuLine $open={mobileOpen} />
          <MobileMenuLine $open={mobileOpen} />
        </MobileMenuButton>

        <MobileNav $open={mobileOpen}>
          <NavList>
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.sectionId}
                $active={activeSection === item.sectionId}
              >
                <button onClick={() => handleNavClick(item.sectionId)}>
                  {item.label}
                </button>
              </NavItem>
            ))}
          </NavList>
        </MobileNav>
      </HeaderInner>
    </HeaderWrapper>
  );
}

export default Header;