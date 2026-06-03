import styled from 'styled-components';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ESG from './components/ESG';
import ProductsAndTech from './components/ProductsAndTech';
import Newsroom from './components/Newsroom';

const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="brand"><BrandStory /></section>
        <section id="sustainability"><ESG /></section>
        <ProductsAndTech />
        <section id="newsroom-section"><Newsroom /></section>
      </main>
      <Footer />
    </HomeWrapper>
  );
}

export default Home;