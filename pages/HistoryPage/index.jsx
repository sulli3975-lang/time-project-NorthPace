import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import brandBg from '../../assets/images/brand-bg.jpg';

import h1 from '../../assets/images/history/history-1.png';
import h2 from '../../assets/images/history/history-2.png';
import h3 from '../../assets/images/history/history-3.png';
import h4 from '../../assets/images/history/history-4.png';
import h5 from '../../assets/images/history/history-5.png';
import h6 from '../../assets/images/history/history-6.png';
import h7 from '../../assets/images/history/history-7.png';
import h8 from '../../assets/images/history/history-8.png';
import h9 from '../../assets/images/history/history-9.png';
import h10 from '../../assets/images/history/history-10.png';
import h11 from '../../assets/images/history/history-11.png';
import h12 from '../../assets/images/history/history-12.png';

import {
  PageWrapper,
  BackgroundImage,
  Container,
  PageTitle,
  Timeline,
  TimelineItem,
  ImageBox,
  ContentBox,
  Year,
  Description,
  BackButton,
  ScrollIndicator,
  ScrollTopButton,
} from './HistoryPage.styles';

const HISTORY_DATA = [
  {
    year: '1966',
    image: h1,
    description: '더글러스 톰킨스, 케네스 클롭이\n샌프란시스코에 아웃도어 장비 소매점 창업',
    align: 'right',
  },
  {
    year: '1970',
    image: h2,
    description: '세계 최초 최저온도 규격 표시 슬리핑백,\n오벌 인텐션 텐트 개발 — 아웃도어 기술 혁신 선도',
    align: 'left',
  },
  {
    year: '1990',
    image: h3,
    description: '히말라야 슈트, 써밋 재킷 출시.\n세계 정상급 등산가·극지탐험가 프로팀 운영 시작',
    align: 'right',
  },
  {
    year: '1997',
    image: h4,
    description: '영원아웃도어, 국내 론칭. \'아웃도어\'라는 단어가\n생소하던 시절, 산악인 인정 원칙 기반으로 시장 개척',
    align: 'left',
  },
  {
    year: '2004',
    image: h5,
    description: '노스페이스 클라이밍팀 창단\n북극 탐험, 히말라야 원정 지원 시작',
    align: 'right',
  },
  {
    year: '2009',
    image: h6,
    description: '북한산 인근 국내 최대\n아웃도어 문화센터 개관',
    align: 'left',
  },
  {
    year: '2013',
    image: h7,
    description: '노스페이스 후원 전문 산악인 들이 Everest 탐험과\nMeru산의 Shark\'s fin 등반을 통해 착장 테스트를\n거친 후, \'써모볼\'을 출시',
    align: 'right',
  },
  {
    year: '2016',
    image: h8,
    description: '리우 하계올림픽 국가대표 공식 후원사\n전 제품 100% 퍼 프리(FUR FREE) 적용',
    align: 'left',
  },
  {
    year: '2018',
    image: h9,
    description: '평창 동계올림픽 국가대표 공식 후원\n슈퍼 에어 롱다운(0.99kg) 출시',
    align: 'right',
  },
  {
    year: '2019',
    image: h10,
    description: '플라스틱병 재활용 에코 플리스 출시\nK-ECO TECH 기술 대중화',
    align: 'left',
  },
  {
    year: '2021',
    image: h11,
    description: '제주 플라스틱병 100톤 재활용 프로젝트\n도쿄 올림픽 단복에 K-ECO TECH 접목',
    align: 'right',
  },
  {
    year: '2023',
    image: h12,
    description: '한국 연 매출 1조원 돌파\n아웃도어 브랜드 역대 최고 기록 경신, 1위 수성',
    align: 'left',
  },
];

function HistoryPage() {
  const navigate = useNavigate();
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  // 빨간 점 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const viewportCenter = window.innerHeight / 2;
      const timelineRect = timelineRef.current.getBoundingClientRect();

      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      const closestItem = itemRefs.current[closestIndex];
      if (closestItem) {
        const itemRect = closestItem.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const relativeTop = itemCenter - timelineRect.top;
        setIndicatorTop(relativeTop);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // TOP 버튼 표시 여부
  useEffect(() => {
    const handleScrollTop = () => {
      setShowTopButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      <BackgroundImage $bg={brandBg} />

      <Header />

      <Container>
        <PageTitle>
          <BackButton onClick={() => navigate('/')}>
            <span>←</span>
            <span>BACK</span>
          </BackButton>
          <h1>OUR HERITAGE</h1>
          <p>1966년부터 이어진 노스페이스의 여정</p>
        </PageTitle>

        <Timeline ref={timelineRef}>
          <ScrollIndicator
            animate={{ top: indicatorTop }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
          {HISTORY_DATA.map((item, index) => {
            const isRight = item.align === 'right';
            return (
              <TimelineItem
                key={item.year}
                ref={(el) => (itemRefs.current[index] = el)}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {isRight ? (
                  <>
                    <ImageBox
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    >
                      <img src={item.image} alt={`노스페이스 ${item.year}`} />
                    </ImageBox>
                    <ContentBox
                      $align="right"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <Year>{item.year}</Year>
                      <Description>{item.description}</Description>
                    </ContentBox>
                  </>
                ) : (
                  <>
                    <ContentBox
                      $align="left"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <Year>{item.year}</Year>
                      <Description>{item.description}</Description>
                    </ContentBox>
                    <ImageBox
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    >
                      <img src={item.image} alt={`노스페이스 ${item.year}`} />
                    </ImageBox>
                  </>
                )}
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>

      <AnimatePresence>
        {showTopButton && (
          <ScrollTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            aria-label="맨 위로 이동"
          >
            <span className="arrow">↑</span>
            <span>TOP</span>
          </ScrollTopButton>
        )}
      </AnimatePresence>

      <Footer />
    </PageWrapper>
  );
}

export default HistoryPage;