import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import productHiking from '../../../../../assets/images/product-main/hiking.jpg';
import productRunning from '../../../../../assets/images/product-main/running.png';
import productTrail from '../../../../../assets/images/product-main/trail.png';
import productClimbing from '../../../../../assets/images/product-main/climbing.png';
import productCamping from '../../../../../assets/images/product-main/camping.jpg';
import productWhitelabel from '../../../../../assets/images/product-main/whitelabel.jpg';

import {
  ProductsWrapper,
  Container,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  CardGrid,
  Card,
  CardImage,
  CardLabel,
} from './ProductsSection.styles';

const PRODUCTS_DATA = [
  { id: 1, label: '하이킹', image: productHiking, path: '/products/hiking' },
  { id: 2, label: '러닝', image: productRunning, path: '/products/running' },
  { id: 3, label: '트레일 러닝', image: productTrail, path: '/products/training' },
  { id: 4, label: '클라이밍', image: productClimbing, path: '/products/climbing' },
  { id: 5, label: '캠핑', image: productCamping, path: '/products/camping' },
  { id: 6, label: '화이트 레벨', image: productWhitelabel, path: '/products/whitelabel' },
];

function ProductsSection() {
  const navigate = useNavigate();

  return (
    <ProductsWrapper id="products-section">
      <Container>
        <SectionHeader>
          <SectionTitle>PRODUCTS</SectionTitle>
          <SectionSubtitle>기능성과 스타일을 모두 담은 노스페이스 컬렉션</SectionSubtitle>
        </SectionHeader>

        <CardGrid>
          {PRODUCTS_DATA.map((item, idx) => (
            <Card
              key={item.id}
              as={motion.button}
              onClick={() => navigate(item.path)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            >
              <CardImage style={{ backgroundImage: `url(${item.image})` }} />
              <CardLabel>{item.label} &gt;</CardLabel>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </ProductsWrapper>
  );
}

export default ProductsSection;