import { useState, useEffect, useRef } from "react";
import * as S from "./ESG.styles";

// 이미지 import (파일 맨 위, 다른 import들 아래에)
import img1 from "../../../../assets/images/esg-1.png";
import img2 from "../../../../assets/images/esg-2.png";
import img3 from "../../../../assets/images/esg-3.png";
import img4 from "../../../../assets/images/esg-4.png";
import img5 from "../../../../assets/images/esg-5.png";
import img6 from "../../../../assets/images/esg-6.png";
import img7 from "../../../../assets/images/esg-7.png";
import img8 from "../../../../assets/images/esg-8.jpg";
import img9 from "../../../../assets/images/esg-9.png";
// ─────────────────────────────────────────────────────────────
// 데이터: 3장씩 한 그룹 (총 3 그룹 = 9 카드)
// 숫자 애니메이션을 위해 value를 "숫자 + suffix" 구조로 분리
// ─────────────────────────────────────────────────────────────
const SLIDES = [
  // Group 1
  [
    {
      label: "재활용/선호 소재 비율",
      value: 64,
      suffix: "%",
      desc: [
        "VF 그룹은 2024년 기준, 재활용·재생 등",
        "'선호 소재(preferred materials)'",
        " 사용 비율을 64%까지 끌어올렸습니다.",
        "",
        "노스페이스는 이 안에서 특히 폴리에스터의 95%,",
        "나일론의 80%를 선호 소재로 전환했습니다.",
      ],
      image: img1 ,
      overlay: "dark",
    },
    {
      label: "재활용·리뉴드 제품 수량",
      value: 100000,
      suffix: " lbs+",
      desc: [
        '노스페이스는 "Clothes the Loop"와 리뉴드 프로그램을',
        "통해 연간 10만 파운드 이상 의류와 신발을",
        "수거·재사용하는 것을 목표로 운영해 왔습니다.",
        "",
        "이 프로그램을 통해 매립으로 향하던",
        "텍스타일 폐기물의 상당 부분이", 
        "재사용·리사이클링됩니다.",
      ],
      image: img2 ,
      overlay: "dark",
    },
    {
      label: "RDS 인증 다운 목표",
      value: 100,
      suffix: "%",
      desc: [
        "노스페이스는 모든 다운 제품을 100%",
        "Responsible Down Standard(RDS) 인증 다운으로",
        "전환하겠다는 목표를 세웠습니다.",
        "",
        "동물 복지와 추적 가능한 공급망을 갖춘", 
        "다운만 사용하도록 표준을 강화하고 있습니다.",
      ],
      image: img3 ,
      overlay: "dark",
    },
  ],
  // Group 2
  [
    {
      label: "일회용 포장재 제거 목표 연도",
      value: 2025,
      suffix: "년",
      desc: [
        "노스페이스는 2025년까지 자사 포장에서 모든 일회용", 
        "플라스틱을 제거하는 것을 목표로 하고 있습니다.",
        "",
        "이를 위해 재활용·책임 조달 소재 기반",
        "포장과 포장재 사용량 감축 파일럿을 진행 중입니다.",
      ],
      image:
        img4 ,
      overlay: "dark",
    },
    {
      label: "재생에너지 사용량",
      value: 97094050,
      suffix: " kWh",
      desc: [
        "노스페이스를 포함한 VF의 공급망·운영 파트너는",
        "약 9,700만 kWh 규모의",
        "재생에너지를 사용하고 있습니다.",
        "",
        "에너지 효율 개선과 재생에너지 전환을 통해",
        "공급망 전체의 탄소 발자국을 줄여가고 있습니다.",
      ],
      image:
        img5 ,
      overlay: "dark",
    },
    {
      label: "온실가스 감축 목표·진행률",
      value: 46,
      suffix: "%",
      desc: [
        "VF는 2030년까지 스코프 1·2 절대 온실가스 배출량을",
        "55% 감축하는 목표를 세웠습니다. (2017년 기준)",
        "",
        "2024년 기준 이미 46% 감축을 달성해",
        "목표에 근접한 상태입니다.",
      ],
      image:
        img6 ,
      overlay: "dark",
    },
  ],
  // Group 3
  [
    {
      label: "기후 목표 기준 연도",
      value: 2030,
      suffix: "년",
      desc: [
        "2030년까지 스코프 1·2 배출량 55% 감축,",
        "공급망 감축 등을 포함한 기후 목표를 운영하고 있습니다.",
        "",
        "장기적인 ESG 로드맵을 통해 제품·소재·공급망 전반의", 
        "지속가능성을 단계적으로 높여가고 있습니다.",
      ],
      image:
        img7 ,
      overlay: "dark",
    },
    {
      
      label: "환경·커뮤니티 파트너 수",
      value: 50,
      suffix: "+ partners",
      desc: [
        "노스페이스는 보호 단체, 산악·환경 비영리,", 
        "커뮤니티 단체 등 50개 이상 파트너와 협력해",
         "자연 보호와 아웃도어 접근성을 확대하고 있습니다.",
         "",
         "트레일 복원, 기후 행동, 청년 아웃도어 프로그램 등",
         "다양한 프로젝트를 지원하며 브랜드가 사용하는 자연을 돌보고 있습니다.",
      ],
      image:
        img8 ,
      overlay: "dark",
    },
    {
      label: "지속가능 제품 식별 배지",
      value: 75,
      suffix: "%+ materials",
      desc: [
        "노스페이스는 Exploration Without Compromise",
        "배지를 통해 소비자가 지속가능성이 높은 제품을",
        "쉽게 구분할 수 있도록 하고 있습니다.",
        "",
        "제품 중량 기준 75% 이상이 재활용 소재,", 
        "재생농업 기반 소재 또는 책임 조달된", 
        "재생 가능 소재로 구성된 경우 해당 배지를 부여합니다.",
      ],
      image:
        img9 ,
      overlay: "dark",
    },
  ],
];
 
// ─────────────────────────────────────────────────────────────
// 숫자 포맷터
// - 연도(1000~2100 정수): 콤마 없이 그대로
// - 그 외: 한국 로케일 콤마 (100,000)
// ─────────────────────────────────────────────────────────────
const isYearValue = (n) =>
  n >= 1000 && n <= 2100 && Number.isInteger(n);
 
const formatNumber = (n) => {
  if (n === null || n === undefined) return "";
  if (isYearValue(n)) return String(n);
  return n.toLocaleString("ko-KR");
};
 
// ─────────────────────────────────────────────────────────────
// 카운트업 훅
// - trigger가 바뀌면 0(또는 year-30)부터 target까지 애니메이션
// - easeOutCubic 이징
// ─────────────────────────────────────────────────────────────
const useCountUp = (target, trigger, duration = 1400) => {
  const [value, setValue] = useState(target ?? 0);
  const rafRef = useRef(null);
 
  useEffect(() => {
    if (target === null || target === undefined) {
      setValue(null);
      return;
    }
 
    // 연도는 0부터 세면 어색하니까 target-30 부터 카운트
    const startFrom = isYearValue(target) ? target - 30 : 0;
    const startTime = performance.now();
 
    const tick = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const current = startFrom + (target - startFrom) * eased;
      setValue(Math.round(current));
 
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };
 
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, trigger, duration]);
 
  return value;
};
 
// ─────────────────────────────────────────────────────────────
// 개별 카드 컴포넌트
// ─────────────────────────────────────────────────────────────
const SusCard = ({ data, groupIndex, cardIndex, direction }) => {
  const animated = useCountUp(data.value, groupIndex);
 
  return (
    <S.Card $direction={direction} $cardIndex={cardIndex}>
      <S.CardImage src={data.image} alt={data.label || "sustainability"} />
      <S.CardOverlay $overlay={data.overlay} />
 
      <S.CardContent>
        {data.label && (
          <>
            <S.CardLabel>{data.label}</S.CardLabel>
            <S.CardValue>
              {formatNumber(animated)}
              <S.CardSuffix>{data.suffix}</S.CardSuffix>
            </S.CardValue>
          </>
        )}
 
        <S.CardDesc>
          {data.desc.map((line, i) =>
            line === "" ? (
              <S.DescBreak key={i} />
            ) : (
              <div key={i}>{line}</div>
            )
          )}
        </S.CardDesc>
      </S.CardContent>
    </S.Card>
  );
};
 
// ─────────────────────────────────────────────────────────────
// 메인 컴포넌트
// ─────────────────────────────────────────────────────────────
const ESG = () => {
  const [groupIndex, setGroupIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev
  const total = SLIDES.length;
 
  const goNext = () => {
    setDirection(1);
    setGroupIndex((prev) => (prev + 1) % total);
  };
 
  const goPrev = () => {
    setDirection(-1);
    setGroupIndex((prev) => (prev - 1 + total) % total);
  };
 
  const goTo = (i) => {
    setDirection(i > groupIndex ? 1 : -1);
    setGroupIndex(i);
  };
 
  const currentGroup = SLIDES[groupIndex];
 
  return (
    <S.Section>
      <S.Container>
        <S.Header>
          <S.Title>
            SUSTAINABILITY FOR
            <br />
            EVERY EXPLORATION
          </S.Title>
          <S.Subtitle>
            노스페이스는 과학 기반 목표에 따라 친환경 소재 사용과 탄소 감축을 단계적으로 확대하고 있습니다.
            <br />
            재활용·재생 원단, 수선·회수 프로그램 등 순환 시스템을 통해 제품의 생애를 더 길게 설계합니다.
            <br />
            이는 단순한 캠페인을 넘어, 우리가 만드는 모든 제품과 공급망에 적용되는 지속가능한 표준입니다.
          </S.Subtitle>
        </S.Header>
 
        <S.CarouselWrap>
          <S.ArrowButton onClick={goPrev} aria-label="이전 슬라이드">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 4L6.5 10L12.5 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </S.ArrowButton>
 
          {/* key를 groupIndex로 줘서 그룹 전환 시 카드 리마운트 + 애니메이션 재실행 */}
          <S.Grid key={groupIndex}>
            {currentGroup.map((card, i) => (
              <SusCard
                key={`${groupIndex}-${i}`}
                data={card}
                groupIndex={groupIndex}
                cardIndex={i}
                direction={direction}
              />
            ))}
          </S.Grid>
 
          <S.ArrowButton onClick={goNext} aria-label="다음 슬라이드">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 4L13.5 10L7.5 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </S.ArrowButton>
        </S.CarouselWrap>
 
        <S.Indicators>
          {SLIDES.map((_, i) => (
            <S.Indicator
              key={i}
              $active={i === groupIndex}
              onClick={() => goTo(i)}
              aria-label={`슬라이드 ${i + 1}로 이동`}
            />
          ))}
        </S.Indicators>
      </S.Container>
    </S.Section>
  );
};
 
export default ESG;
 