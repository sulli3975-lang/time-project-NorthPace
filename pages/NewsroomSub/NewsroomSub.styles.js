import styled from "styled-components";

export const NewsroomWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0px 20px 128px;
  padding-top: 150px;
  background: #f4f5f6;
  font-family:
    "Pretendard",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  @media (max-width: 768px) {
    padding: 64px 16px 88px;
  }
`;

export const NewsroomInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  display: block;
  padding: 58px 64px 56px;
  margin-bottom: 32px;
  color: #ffffff;
  background: #111111;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 64px;
    right: 64px;
    bottom: 34px;
    height: 1px;
    background: rgba(255, 255, 255, 0.18);
  }

  &::after {
    content: "NEWS";
    position: absolute;
    right: 54px;
    bottom: 18px;
    color: rgba(255, 255, 255, 0.04);
    font-size: 142px;
    font-weight: 900;
    line-height: 0.8;
    letter-spacing: 0;
    pointer-events: none;
  }

  @media (max-width: 900px) {
    padding: 44px 32px 48px;

    &::before {
      left: 32px;
      right: 32px;
      bottom: 28px;
    }

    &::after {
      right: 24px;
      bottom: 14px;
      font-size: 86px;
    }
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
`;

export const Eyebrow = styled.p`
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.62);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 72px;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
  letter-spacing: 0;

  @media (max-width: 900px) {
    font-size: 52px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const HeaderCopy = styled.p`
  max-width: 620px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 19px;
  line-height: 1.7;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin: 0 auto 16px;
  padding: 8px;
  background: #ffffff;
  border: 1px solid #e1e3e6;
  border-radius: 8px;
`;

export const FilterButton = styled.button`
  min-height: 42px;
  padding: 0 18px;
  border: 1px solid ${({ $active }) => ($active ? "#111111" : "transparent")};
  border-radius: 6px;
  background: ${({ $active }) => ($active ? "#111111" : "transparent")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#575d64")};
  cursor: pointer;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: #111111;
    color: ${({ $active }) => ($active ? "#ffffff" : "#111111")};
  }

  &:focus-visible {
    outline: 2px solid #cc0000;
    outline-offset: 2px;
  }
`;

export const ResultBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin: 0 auto 14px;
  color: #5f666e;
`;

export const ResultCount = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const ResultFilter = styled.span`
  color: #111111;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
`;

export const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  width: 100%;
  margin: 0 auto;
`;

export const NewsCard = styled.article`
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr);
  min-height: 320px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e6e8eb;
  border-radius: 8px;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.07);

  @media (max-width: 900px) {
    grid-template-columns: 320px minmax(0, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const VisualCard = styled.div`
  width: 100%;
  height: 100%;
  min-height: 320px;
  overflow: hidden;
  background: #f3f3f3;

  @media (max-width: 760px) {
    min-height: auto;
    aspect-ratio: 16 / 10;
  }
`;

export const VisualImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.55s ease;

  ${NewsCard}:hover & {
    transform: scale(1.08);
  }
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 34px;
  background: #ffffff;

  @media (max-width: 640px) {
    padding: 26px 22px;
  }
`;

export const NewsItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
`;

export const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 4px;
  background: #f1f2f4;
  color: #cc0000;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.06em;
`;

export const NewsItemTitle = styled.h3`
  margin: 0;
  color: #111111;
  font-size: 27px;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: 0;

  @media (max-width: 640px) {
    font-size: 23px;
  }
`;

export const NewsItemDate = styled.span`
  color: #878c92;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
`;

export const NewsBody = styled.div`
  display: grid;
  gap: 18px;
  color: #111111;
  font-size: 15px;
  line-height: 1.62;
  font-weight: 500;
`;

export const NewsParagraph = styled.p`
  margin: 0;
`;

export const NewsSection = styled.div`
  display: grid;
  gap: 9px;
  padding: 2px 0;
`;

export const NewsSectionLabel = styled.strong`
  display: block;
  color: #111111;
  font-size: 14px;
  font-weight: 900;
`;

export const NewsList = styled.ul`
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  color: #111111;
  font-size: 15px;
  line-height: 1.48;
  font-weight: 600;
  list-style: none;

  li {
    position: relative;
    padding-left: 16px;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #cc0000;
    transform: translateY(-50%);
  }

  li::marker {
    color: #cc0000;
  }
`;

export const NewsNote = styled.p`
  margin: 2px 0 0;
  padding: 10px 12px;
  border-left: 3px solid #cc0000;
  background: #fff5f5;
  color: #222222;
  font-size: 14px;
  line-height: 1.55;
  font-weight: 700;
`;

export const NewsItemFooter = styled.div`
  margin-top: 4px;
  padding-top: 0;
`;

export const NewsItemLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #cc0000;
  font-weight: 900;
  text-decoration: none;
  font-size: 15px;

  &::after {
    content: "->";
    color: #cc0000;
  }

  &:focus-visible {
    outline: 2px solid #cc0000;
    outline-offset: 4px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const PageNumber = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid ${({ $active }) => ($active ? "#111111" : "#d9dde2")};
  border-radius: 6px;
  background: ${({ $active }) => ($active ? "#111111" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#7d838a")};
  font-size: 14px;
  cursor: pointer;
  font-weight: 800;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: #111111;
    color: ${({ $active }) => ($active ? "#ffffff" : "#111111")};
  }
`;
