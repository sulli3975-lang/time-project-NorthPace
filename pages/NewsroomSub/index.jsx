import { useMemo, useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";


import {
  NewsroomWrapper,
  NewsroomInner,
  PageHeader,
  HeaderContent,
  Eyebrow,
  Title,
  HeaderCopy,
  FilterBar,
  FilterButton,
  ContentArea,
  NewsCard,
  VisualCard,
  VisualImage,
  NewsItem,
  NewsItemHeader,
  CategoryBadge,
  NewsItemTitle,
  NewsBody,
  NewsParagraph,
  NewsSection,
  NewsSectionLabel,
  NewsList,
  NewsNote,
  NewsItemFooter,
  NewsItemLink,
  NewsItemDate,
  ResultBar,
  ResultCount,
  ResultFilter,
  Pagination,
  PageNumber,
} from "./NewsroomSub.styles.js";

import newsroom1 from "../../assets/images/newsroom-1.jpg";
import newsroom2 from "../../assets/images/newsroom-2.jpg";
import newsroom3 from "../../assets/images/newsroom-3.png";
import newsroom4 from "../../assets/images/newsroom-4.png";

const filters = ["ALL", "EVENT", "CAMPAIGN", "TECHNOLOGY", "SUSTAINABILITY"];
const ITEMS_PER_PAGE = 2;

const newsItems = [
  {
    id: 1,
    category: "EVENT",
    title: "노스페이스 키즈 K-POP 댄스 클래스 이벤트 안내",
    date: "2026.04.20",
    image: newsroom1,
    body: [
      {
        type: "paragraph",
        text: "안녕하세요. 노스페이스 온라인 스토어입니다.",
      },
      {
        type: "paragraph",
        text: "노스페이스 키즈와 함께하는 특별한 체험 프로그램, K-POP 댄스 클래스 이벤트를 진행합니다. 아이들이 즐겁게 참여할 수 있는 이번 프로그램은 전문 댄스팀과 함께하는 체험형 클래스로 운영됩니다.",
      },
      {
        type: "section",
        title: "키즈 댄스 클래스 OPEN",
        items: [
          "전문 강사와 함께하는 K-POP 안무 클래스",
          "아이들이 직접 움직이며 즐길 수 있는 참여형 프로그램",
          "자세한 일정과 참여 방법은 이벤트 페이지에서 확인",
        ],
      },
      {
        type: "paragraph",
        text: "앞으로도 다양한 경험과 즐거움을 제공할 수 있도록 노력하겠습니다. 감사합니다.",
      },
    ],
    link: "키즈 댄스 클래스 자세히 보기",
  },
  {
    id: 2,
    category: "CAMPAIGN",
    title: "2026년 가정의 달 프로모션 안내",
    date: "2026.04.20",
    image: newsroom2,
    body: [
      {
        type: "section",
        title: "프로모션 기간",
        items: ["2026년 4월 13일(월) ~ 2026년 5월 17일(일)"],
      },
      {
        type: "section",
        title: "프로모션 혜택",
        items: [
          "더블 마일리지 적립",
          "10만원 이상 구매 고객: NUPTSE MOLD POUCH 또는 타포린백 S 랜덤 증정",
          "20만원 이상 구매 고객: MULTI CROSS BAG MINI 증정",
        ],
      },
      {
        type: "note",
        text: "사은품은 한정 수량으로 조기 소진 시 종료될 수 있습니다.",
      },
    ],
    link: "프로모션 혜택 자세히 보기",
  },
  {
    id: 3,
    category: "TECHNOLOGY",
    title: "고기능 방수 소재와 경량 설계 기술 업데이트",
    date: "2026.04.12",
    image: newsroom3,
    body: [
      {
        type: "paragraph",
        text: "노스페이스는 변화가 잦은 아웃도어 환경에서도 안정적인 활동을 돕기 위해 방수, 투습, 경량 설계 기술을 제품 라인업 전반에 확대 적용했습니다.",
      },
      {
        type: "section",
        title: "주요 업데이트",
        items: [
          "고기능 방수 소재 적용으로 비와 눈에 대한 보호력 강화",
          "내부 습기를 배출하는 투습 구조로 장시간 착용 시 쾌적함 유지",
          "움직임이 많은 활동을 고려한 입체 패턴과 경량 부자재 사용",
        ],
      },
      {
        type: "paragraph",
        text: "이번 기술 업데이트는 재킷, 팬츠, 키즈 아우터까지 순차적으로 반영되며 일상과 여행, 가벼운 산행 모두에서 편안한 착용감을 제공합니다.",
      },
    ],
    link: "기술 스토리 확인하기",
  },
  {
    id: 4,
    category: "SUSTAINABILITY",
    title: "리사이클 원단 적용 제품군 확대",
    date: "2026.04.05",
    image: newsroom4,
    body: [
      {
        type: "paragraph",
        text: "노스페이스는 지속 가능한 소재 사용 비중을 높이고 생산 과정의 환경 부담을 줄이기 위해 리사이클 원단 적용 제품군을 확대합니다.",
      },
      {
        type: "section",
        title: "확대 적용 제품군",
        items: [
          "일상과 아웃도어 활동에 활용하기 좋은 경량 재킷 라인",
          "보온성과 관리 편의성을 고려한 플리스 제품군",
          "내구성을 강화한 백팩과 데일리 액세서리 라인",
        ],
      },
      {
        type: "paragraph",
        text: "앞으로도 소재 선택부터 생산, 사용 이후의 순환까지 고려한 제품 개발을 이어가며 더 오래 입고 책임 있게 선택할 수 있는 아웃도어 문화를 만들어가겠습니다.",
      },
    ],
    link: "지속가능성 소식 보기",
  },
];

const renderNewsBody = (body) =>
  body.map((block, index) => {
    if (block.type === "section") {
      return (
        <NewsSection key={`${block.title}-${index}`}>
          <NewsSectionLabel>{block.title}</NewsSectionLabel>
          <NewsList>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </NewsList>
        </NewsSection>
      );
    }

    if (block.type === "note") {
      return <NewsNote key={`${block.type}-${index}`}>* {block.text}</NewsNote>;
    }

    return (
      <NewsParagraph key={`${block.type}-${index}`}>{block.text}</NewsParagraph>
    );
  });

function Newsroom() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activePage, setActivePage] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeFilter === "ALL") {
      return newsItems;
    }

    return newsItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [activePage, filteredItems]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setActivePage(1);
  };

  return (
    <>
    <Header />
    <NewsroomWrapper>
      <NewsroomInner>
        <PageHeader>
          <HeaderContent>
            <Eyebrow>THE NORTH FACE NEWS</Eyebrow>
            <Title>Newsroom</Title>
            <HeaderCopy>
              노스페이스의 새로운 소식과 캠페인, 기술 업데이트, 지속가능한
              활동을 <br /> 한곳에서 만나보세요.
            </HeaderCopy>
          </HeaderContent>
        </PageHeader>

        <FilterBar aria-label="Newsroom category filter">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              type="button"
              $active={activeFilter === filter}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterBar>

        <ResultBar>
          <ResultCount>총 {filteredItems.length}개 소식</ResultCount>
          <ResultFilter>{activeFilter}</ResultFilter>
        </ResultBar>

        <ContentArea id="newsroom-list" key={`${activeFilter}-${activePage}`}>
          {paginatedItems.map((item) => (
            <NewsCard key={item.id}>
              <VisualCard>
                <VisualImage src={item.image} alt={item.title} />
              </VisualCard>

              <NewsItem>
                <NewsItemHeader>
                  <CategoryBadge>{item.category}</CategoryBadge>
                  <NewsItemDate>{item.date}</NewsItemDate>
                </NewsItemHeader>

                <NewsItemTitle>{item.title}</NewsItemTitle>
                <NewsBody>{renderNewsBody(item.body)}</NewsBody>

                <NewsItemFooter>
                  <NewsItemLink href="#">{item.link}</NewsItemLink>
                </NewsItemFooter>
              </NewsItem>
            </NewsCard>
          ))}
        </ContentArea>

        {totalPages > 1 && (
          <Pagination aria-label="Newsroom pagination">
            {[...Array(totalPages)].map((_, index) => (
              <PageNumber
                key={index}
                type="button"
                $active={activePage === index + 1}
                aria-current={activePage === index + 1 ? "page" : undefined}
                onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </PageNumber>
            ))}
          </Pagination>
        )}
      </NewsroomInner>
    </NewsroomWrapper>
    <Footer />
    </>
  );
}

export default Newsroom;
