import ProductsSection from './ProductsSection';
import TechnologySection from './TechnologySection';

import { Wrapper, BackgroundLayer } from './ProductsAndTech.styles';

function ProductsAndTech() {
  return (
    <Wrapper>
      <BackgroundLayer />
      <ProductsSection />
      <TechnologySection />
    </Wrapper>
  );
}

export default ProductsAndTech;