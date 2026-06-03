import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import './TechSub.css';

import rainbowLogo from '../../assets/images/rainbowLogo.png';
import tech1 from '../../assets/images/tech-1.jpg';
import tech2 from '../../assets/images/tech-2.jpg';
import tech3 from '../../assets/images/tech-3.jpg';
import tech4 from '../../assets/images/tech-4.jpg';
import tech5 from '../../assets/images/tech-5.jpg';

function TechSub() {
  const techData = [
    {
      title: 'DRY VENT',
      desc: '특수 무공질 막 구조로 외부의 수분 유입은 완벽히 차단하고, 내부의 습기는 신속히 배출하는 노스페이스만의 독창적 소재입니다.',
      img: tech1,
    },
    {
      title: 'K-ECO TECH',
      desc: '버려진 페트병을 재활용하거나 의류를 수거해 다시 만드는 등 환경 보호를 실천하는 노스페이스의 친환경 공정 기술입니다.',
      img: tech2,
    },
    {
      title: 'V-MOTION / T-BALL',
      desc: '동물 보호와 워셔블 기능을 갖춘 고성능 인공 충전재입니다. 가벼운 무게 대비 뛰어난 보온성과 복원력을 자랑합니다.',
      img: tech3,
    },
    {
      title: 'FUTURELIGHT',
      desc: '나노 스피닝 공법을 통해 탄생한 초경량 나노 구조 소재로, 최상의 방수 성능과 독보적인 통기성을 동시에 제공합니다.',
      img: tech4,
    },
    {
      title: 'WINDSTOPPER',
      desc: '차가운 바람을 100%에 가깝게 차단하여 체온을 유지해주며, 격렬한 활동 중에도 신체를 쾌적하게 보호합니다.',
      img: tech5,
    },
  ];

  return (
    <>
      <Header />

      <header className="main-header">
        <img src={rainbowLogo} alt="The North Face" className="rainbow-logo" />
        <h1 className="techsub-main-title">OUR TECHNOLOGIES</h1>
      </header>

      <main className="content-wrapper">
        {techData.map((item, index) => {
          const isRightSide = index % 2 !== 0;
          return (
            <motion.section
              key={index}
              className={`tech-card ${isRightSide ? 'right-side' : 'left-side'}`}
              initial={{ opacity: 0, x: isRightSide ? 150 : -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="text-content">
                <span className="tech-label">TECHNOLOGY 0{index + 1}</span>
                <h2 className="tech-title">{item.title}</h2>
                <p className="tech-desc">{item.desc}</p>
              </div>

              <div className="image-content">
                <img src={item.img} alt={item.title} />
              </div>
            </motion.section>
          );
        })}
      </main>

      <Footer />
    </>
  );
}

export default TechSub;