import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.darkBg};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.layout.contentPadding};
  text-align: center;
`;

export const ErrorCode = styled.h1`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: 180px;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: -0.05em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
  text-shadow: 0 0 60px rgba(255, 255, 255, 0.3);

  ${({ theme }) => theme.media.tablet} {
    font-size: 120px;
  }
`;

export const ErrorMessage = styled.h2`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-bottom: 16px;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;

export const ErrorDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.body};
  color: rgba(255, 255, 255, 0.7);
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  margin-bottom: 48px;
  max-width: 500px;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.bodySm};
    margin-bottom: 32px;
  }
`;

export const HomeButton = styled(Link)`
  display: inline-block;
  padding: 16px 40px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.ko};
  font-size: ${({ theme }) => theme.fontSize.bodySm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.05em;
  border-radius: 32px;
  transition: ${({ theme }) => theme.transition.base};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;