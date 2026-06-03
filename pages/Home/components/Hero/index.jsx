import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import hero1 from '../../../../assets/videos/hero-1.mp4';
import hero2 from '../../../../assets/videos/hero-2.mp4';
import hero3 from '../../../../assets/videos/hero-3.mp4';
import hero4 from '../../../../assets/videos/hero-4.mp4';
import hero5 from '../../../../assets/videos/hero-5.mp4';

import {
  HeroWrapper,
  VideoLayer,
  StyledVideo,
  Overlay,
  ContentArea,
  ContentInner,
  SubCopy,
  MainCopy,
  CTAButton,
  IndicatorArea,
  IndicatorList,
  IndicatorItem,
  ScrollHint,
  ScrollHintLine,
} from './Hero.styles';

const PRODUCTS_PATH = '/products';

const SLIDES = [
   {
    id: 0,
    video: hero1,
    subCopy: 'HOME',
    mainCopy: 'NEVER STOP\nEXPLORING',
    cta: { label: 'DISCOVER MORE', to: PRODUCTS_PATH },
  },
  {
    id: 1,
    video: hero2,
    subCopy: 'BRAND STORY',
    mainCopy: 'NEVER STOP\nEXPLORING',
    cta: { label: 'OUR STORY', to: PRODUCTS_PATH },
  },
  {
    id: 2,
    video: hero3,
    subCopy: 'SUSTAINABILITY',
    mainCopy: 'NEVER STOP\nPROTECTING',
    cta: { label: 'LEARN MORE', to: PRODUCTS_PATH },
  },
  {
    id: 3,
    video: hero4,
    subCopy: 'PRODUCTS',
    mainCopy: '산이 만들고,\n도시가 입는다',
    cta: { label: 'VIEW PRODUCTS', to: PRODUCTS_PATH },
  },
  {
    id: 4,
    video: hero5,
    subCopy: 'TECHNOLOGY',
    mainCopy: '보이지 않는 기술이,\n가장 가까이에서',
    cta: { label: 'EXPLORE TECH', to: PRODUCTS_PATH },
  },
];

const SLIDE_DURATION = 11000; // 11초마다 자동 전환

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  // 자동 슬라이드
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // 인디케이터 클릭 시 슬라이드 변경 + 타이머 리셋
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  };

  const slide = SLIDES[currentSlide];

  return (
    <HeroWrapper>
      {/* 영상 레이어 */}
      <VideoLayer>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <StyledVideo
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </AnimatePresence>
        <Overlay />
      </VideoLayer>

      {/* 콘텐츠 레이어 */}
      <ContentArea>
        <ContentInner>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <SubCopy>{slide.subCopy}</SubCopy>
              <MainCopy>
                {slide.mainCopy.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < slide.mainCopy.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </MainCopy>
              {slide.cta && (
                <CTAButton as={Link} to={slide.cta.to}>
                  {slide.cta.label}
                </CTAButton>
              )}
            </motion.div>
          </AnimatePresence>
        </ContentInner>

        {/* 인디케이터 */}
        <IndicatorArea>
          <IndicatorList>
            {SLIDES.map((s, idx) => (
              <IndicatorItem
                key={s.id}
                $active={idx === currentSlide}
                onClick={() => handleIndicatorClick(idx)}
                aria-label={`슬라이드 ${idx + 1}`}
              />
            ))}
          </IndicatorList>
        </IndicatorArea>
      </ContentArea>

      {/* 하단 스크롤 힌트 */}
      <ScrollHint>
        <span>SCROLL</span>
        <ScrollHintLine />
      </ScrollHint>
    </HeroWrapper>
  );
}

export default Hero;