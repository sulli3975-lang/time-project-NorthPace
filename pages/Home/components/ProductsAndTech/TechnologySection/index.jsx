import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import tech1 from '../../../../../assets/images/tech-1.jpg';
import tech2 from '../../../../../assets/images/tech-2.jpg';
import tech3 from '../../../../../assets/images/tech-3.jpg';
import tech4 from '../../../../../assets/images/tech-4.jpg';
import tech5 from '../../../../../assets/images/tech-5.jpg';

import {
  TechWrapper,
  Container,
  LogoMark,
  SectionTitle,
  CarouselWrapper,
  PrevButton,
  NextButton,
  CardWrapper,
  CardInner,
  CardFront,
  CardBack,
  CardImage,
  CardFrontTitle,
  CardFrontDesc,
  CardBackTitle,
  CardBackDivider,
  CardBackDesc,
  ClickButton,
  ViewAllButton,
} from './TechnologySection.styles';

const TECH_DATA = [
  {
    id: 1,
    label: 'DRY VENT',
    image: tech1,
    frontDesc: '외부 수분은 차단하고 내부 습기는 빠르게 배출 ',
    backDesc: '특수 무공질 피복 구조의 막을 적용하여 외부의 수분 유입을 원천 차단하고, 내부의 습기는 신속히 배출하는 노스페이스의 상징적 소재입니다. 합리적인 가격대에 강력한 방수·방풍·투습 성능을 갖추어 일상과 아웃도어를 아우르는 범용적인 보호막 역할을 합니다.',
  },
  {
    id: 2,
    label: 'K-ECO TECH',
    image: tech2,
    frontDesc: '재활용 소재를 활용해 환경 부담을 줄이는 친환경 기술 ',
    backDesc: '버려진 페트병을 재활용하거나 생분해 소재를 사용하는 등 환경 부하를 최소화하는 노스페이스만의 친환경 공정 기술입니다. 지속 가능한 패션을 선도하며, 리사이클 소재임에도 기존 기능성 원단에 뒤처지지 않는 내구성과 고품질을 구현하는 것이 특징입니다.',
  },
  {
    id: 3,
    label: 'V-MOTION / T-BALL',
    image: tech3,
    frontDesc: '가볍고 뛰어난 보온성을 제공, 고기능 인공 충전재 기술',
    backDesc: '동물권 보호를 위해 다운(Down)의 입체 구조를 재현한 고성능 인공 충전재 기술입니다. 가벼운 무게 대비 뛰어난 보온성을 제공하며, 실제 털이 아니기에 물에 젖어도 보온력이 급격히 떨어지지 않고 가정 내 세탁 및 관리가 매우 간편합니다 ',
  },
  {
    id: 4,
    label: 'FUTURELIGHT',
    image: tech4,
    frontDesc: '초정밀 나노 멤브레인 구조로 뛰어난 통기성과 쾌적함을 제공',
    backDesc: '나노 스피닝 공법을 통해 섬유 사이에 미세한 구멍을 낸 초정밀 나노 구조의 멤브레인을 적용했습니다. 기존 방수 소재의 한계를 넘어 압도적인 공기 투과성(통기성)을 자랑하며, 격렬한 활동 중에도 열기를 즉각 배출해 쾌적한 퍼포먼스를 유지해 줍니다. ',
  },
  {
    id: 5,
    label: 'WINDSTOPPER',
    image: tech5,
    frontDesc: '거친 환경에서도 몸을 따뜻하고 쾌적하게 유지해주는 기능성 소재',
    backDesc: '외부에서 유입되는 차가운 바람을 100%에 가깝게 차단하여 체온 저하를 막아주는 방풍 특화 소재입니다. 동시에 매우 얇고 가벼운 막이 땀을 빠르게 배출해 주어, 기온 변화가 심하거나 바람이 강한 환경에서도 신체를 편안하고 따뜻하게 유지해 줍니다.',
  },
];

// 슬라이드 방향에 따른 애니메이션 값
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

function TechnologySection() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(1); // 1: 오른쪽→왼쪽, -1: 왼쪽→오른쪽

  const handlePrev = () => {
    setDirection(-1);
    setFlipped(false);
    setCurrentIndex((prev) =>
      prev === 0 ? TECH_DATA.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setFlipped(false);
    setCurrentIndex((prev) =>
      prev === TECH_DATA.length - 1 ? 0 : prev + 1
    );
  };

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const item = TECH_DATA[currentIndex];

  return (
    <TechWrapper id="technology-section">
      <Container>
        <LogoMark>THE NORTH FACE</LogoMark>
        <SectionTitle>Our technologies</SectionTitle>
      </Container>

      <CarouselWrapper>
        <PrevButton onClick={handlePrev} aria-label="이전">◀</PrevButton>

        {/* AnimatePresence — 카드 전환 애니메이션 */}
        <CardWrapper>
          <AnimatePresence
            initial={false}
            mode="wait"
            custom={direction}
          >
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 260, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              style={{ width: '100%', height: '100%' }}
            >
              {/* 플립 카드 */}
              <CardInner $flipped={flipped}>
                {/* 앞면 */}
                <CardFront>
                  <CardImage
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div
                    style={{
                      flex: 1,
                      padding: '40px 48px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '20px',
                    }}
                  >
                    <CardFrontTitle>{item.label}</CardFrontTitle>
                    <CardFrontDesc>{item.frontDesc}</CardFrontDesc>
                    <ClickButton onClick={handleFlip}>CLICK ↻</ClickButton>
                  </div>
                </CardFront>

                {/* 뒷면 */}
                <CardBack>
                  <CardBackTitle>{item.label}</CardBackTitle>
                  <CardBackDivider />
                  <CardBackDesc>{item.backDesc}</CardBackDesc>
                  <ClickButton onClick={handleFlip}>CLICK ↻</ClickButton>
                </CardBack>
              </CardInner>
            </motion.div>
          </AnimatePresence>
        </CardWrapper>

        <NextButton onClick={handleNext} aria-label="다음">▶</NextButton>
      </CarouselWrapper>

      <Container>
        <ViewAllButton onClick={() => navigate('/technology')}>
          전체보기
        </ViewAllButton>
      </Container>
    </TechWrapper>
  );
}

export default TechnologySection;