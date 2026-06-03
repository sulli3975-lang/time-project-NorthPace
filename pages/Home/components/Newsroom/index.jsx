import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  NewsroomWrapper,
  Background,
  Container,
  TitleArea,
  MainTitle,
  CTAButton,
  Arrow,
} from './Newsroom.styles';

function Newsroom() {
  const navigate = useNavigate();

  return (
    <NewsroomWrapper>
      <Background />

      <Container>
        <TitleArea
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <MainTitle>News Room</MainTitle>
          <CTAButton onClick={() => navigate('/newsroom')}>
            <span>뉴스룸 보러가기</span>
            <Arrow>→</Arrow>
          </CTAButton>
        </TitleArea>
      </Container>
    </NewsroomWrapper>
  );
}

export default Newsroom;