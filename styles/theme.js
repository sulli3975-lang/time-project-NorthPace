const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    darkBg: '#1A1A1A',
    darkOverlay: 'rgba(0, 0, 0, 0.5)',
    textPrimary: '#1A1A1A',
    textSecondary: '#666666',
    textTertiary: '#999999',
    textOnDark: '#FFFFFF',
    textOnDarkMuted: 'rgba(255, 255, 255, 0.7)',
    accent: '#CC0000',
    gray100: '#F5F5F5',
    gray200: '#E5E5E5',
    gray300: '#CCCCCC',
    gray400: '#999999',
    gray500: '#666666',
    gray600: '#333333',
    border: '#E5E5E5',
    borderDark: 'rgba(255, 255, 255, 0.2)',
  },

fonts: {
  ko: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
  en: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",  // ← Inter를 Pretendard로 변경
},

  fontSize: {
    hero: '72px',
    h1: '56px',
    h2: '40px',
    h3: '28px',
    h4: '20px',
    bodyLg: '18px',
    body: '16px',
    bodySm: '14px',
    caption: '12px',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },

  media: {
    mobile: '@media (max-width: 480px)',
    tablet: '@media (max-width: 768px)',
    desktop: '@media (max-width: 1024px)',
    wide: '@media (min-width: 1440px)',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '80px',
    section: '120px',
  },

  layout: {
    maxWidth: '1440px',
    contentPadding: '60px',
    contentPaddingMobile: '20px',
  },

  transition: {
    fast: '0.2s ease',
    base: '0.3s ease',
    slow: '0.6s ease',
  },

  zIndex: {
    base: 1,
    dropdown: 100,
    header: 1000,
    modal: 2000,
  },
};

export default theme;