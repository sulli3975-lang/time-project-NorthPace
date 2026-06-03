import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #0a0a0a;
  color: ${({ theme }) => theme.colors.white};
  padding: 56px 0 24px;

  ${({ theme }) => theme.media.tablet} {
    padding: 40px 0 20px;
  }
`;

export const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.contentPadding};

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.layout.contentPaddingMobile};
  }
`;

/* ===== Top band (Brand slogan + Newsletter, 50:50) ===== */

export const TopBand = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  align-items: center;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 32px;
  }
`;

export const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NewsletterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BrandSlogan = styled.h2`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.desktop} {
    font-size: 56px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 40px;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 32px;
  }
`;

export const BrandSubline = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  color: rgba(255, 255, 255, 0.62);
  letter-spacing: 0.02em;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
  }
`;

/* ===== Newsletter ===== */

export const NewsletterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NewsletterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 24px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 18px;
  }
`;

export const NewsletterDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  color: rgba(255, 255, 255, 0.62);
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
`;

export const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  transition: border-color ${({ theme }) => theme.transition.base};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 14px 4px;
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
  }
`;

export const NewsletterSubmit = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 4px 14px 16px;
  transition: ${({ theme }) => theme.transition.base};

  svg {
    transition: transform ${({ theme }) => theme.transition.base};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

/* ===== Link grid ===== */

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 40px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    padding: 32px 0;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ColumnTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkItem = styled.li`
  a,
  button {
    display: inline-block;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.ko};
    font-size: ${({ theme }) => theme.fontSize.bodySm};
    color: rgba(255, 255, 255, 0.62);
    transition: color ${({ theme }) => theme.transition.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ContactCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.en};
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: -0.01em;
    display: block;
  }

  span {
    display: block;
  }
`;

/* ===== Social / family band ===== */

export const SocialBand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  gap: 24px;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const SocialLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SocialLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  color: rgba(255, 255, 255, 0.5);
`;

export const SnsList = styled.div`
  display: flex;
  gap: 12px;
`;

export const SnsItem = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;

export const FamilySelect = styled.select`
  min-width: 220px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
  transition: ${({ theme }) => theme.transition.fast};

  option {
    background: #0a0a0a;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

/* ===== Address bottom ===== */

export const Address = styled.div`
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: rgba(255, 255, 255, 0.42);
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
  }
`;

export const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSize.caption};
  color: rgba(255, 255, 255, 0.6) !important;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin-bottom: 4px;
`;

/* ===== Legacy aliases (kept for safety; unused after redesign) ===== */
export const FooterTop = styled.div``;
export const LogoArea = styled.div``;
export const LogoText = styled.div``;
export const LinkColumns = styled.div``;
export const FooterBottom = styled.div``;
export const ContactArea = styled.div``;
export const ContactRow = styled.div``;
export const ContactLabel = styled.span``;
export const ContactValue = styled.span``;
export const FamilySite = styled.div``;
