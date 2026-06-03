import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Products from './pages/Products';
import ProductDetailPage from './pages/ProductDetailPage';
import BestSelection from './pages/Products/BestSelection';

import NewsroomSub from './pages/NewsroomSub';
import TechSub from './pages/TechSub';
import HistoryPage from './pages/HistoryPage';
import ScrollToTop from './components/common/ScrollToTop';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 노스페이스 연대기 페이지 */}
        <Route path="/history" element={<HistoryPage />} />

        {/* 상품 페이지 */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/best" element={<BestSelection />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        {/* 기술 상세 페이지 */}
        <Route path="/technology" element={<TechSub />} />

        {/* 뉴스룸 상세 페이지 */}
        <Route path="/newsroom" element={<NewsroomSub />} />

        {/* 그 외 잘못된 URL → 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;