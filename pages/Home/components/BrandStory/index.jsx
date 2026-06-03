import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import brandBg from '../../../../assets/images/brand-bg.jpg';
import brand1966 from '../../../../assets/images/brand-1966.png';
import brand1997 from '../../../../assets/images/brand-1997.png';

import {
  StoryWrapper,
  Background,
  Overlay,
  Container,
  Header,
  SectionLabel,
  SectionTitle,
  TimelineArea,
  TimelineLine,
  TimelineItem,
  TimelineImage,
  ImagePlaceholder,
  TimelineContent,
  Year,
  CardTitle,
  CardDesc,
  Footer,
  Closing,
  CTAButton,
  Arrow,
} from './BrandStory.styles';

const TIMELINE_DATA = [
  {
    id: 1,
    year: '1966',
    title: '브랜드의 시작',
    desc: '샌프란시스코의 작은 아웃도어 장비점으로\n출발하여 노스페이스의 이야기가 시작됐다.',
    align: 'right',
    image: brand1966,
    placeholderText: '1966 SAN FRANCISCO',
  },
  {
    id: 2,
    year: '1997',
    title: '한국 시장 진출',
    desc: '영원아웃도어를 통해 국내에 본격적으로 소개되며\n한국 아웃도어 시장에 본격적으로 진입했다.',
    align: 'left',
    image: brand1997,
    placeholderText: '1997 KOREA',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function BrandStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const handleOpenHistory = () => {
    navigate('/history');
  };

  return (
    <StoryWrapper ref={sectionRef}>
      <Background style={{ backgroundImage: `url(${brandBg})` }} />
      <Overlay />

      <Container>
        <Header>
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <SectionLabel>BRAND STORY</SectionLabel>
            <SectionTitle>
              "끝없는 탐험의 시작,<br />
              노스페이스의 여정"
            </SectionTitle>
          </motion.div>
        </Header>

        <TimelineArea>
          <TimelineLine />

          {TIMELINE_DATA.map((item, idx) => (
            <TimelineItem
              key={item.id}
              $align={item.align}
              as={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + idx * 0.2,
                ease: 'easeOut',
              }}
            >
              <TimelineImage>
                {item.image ? (
                  <img src={item.image} alt={item.placeholderText} />
                ) : (
                  <ImagePlaceholder>
                    <span>{item.placeholderText}</span>
                  </ImagePlaceholder>
                )}
              </TimelineImage>

              <TimelineContent>
                <Year>{item.year}</Year>
                <CardTitle>{item.title}</CardTitle>
                <CardDesc>
                  {item.desc.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < item.desc.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </CardDesc>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineArea>

        <Footer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          >
            <Closing>
              58년의 탐험,<br />
              아직 끝나지 않았다
            </Closing>
            <CTAButton as="button" onClick={handleOpenHistory}>
              <span>연대기 상세보기</span>
              <Arrow>→</Arrow>
            </CTAButton>
          </motion.div>
        </Footer>
      </Container>
    </StoryWrapper>
  );
}

export default BrandStory;