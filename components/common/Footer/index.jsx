import { useState } from 'react';
import {
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandFacebook,
  TbBrandX,
  TbMail,
  TbMapPin,
  TbPhone,
  TbClock,
  TbArrowRight,
} from 'react-icons/tb';

import {
  FooterWrapper,
  FooterInner,
  TopBand,
  BrandCol,
  BrandSlogan,
  BrandSubline,
  NewsletterCol,
  NewsletterText,
  NewsletterTitle,
  NewsletterDesc,
  NewsletterForm,
  NewsletterInput,
  NewsletterSubmit,
  FooterGrid,
  LinkColumn,
  ColumnTitle,
  LinkList,
  LinkItem,
  ContactCol,
  ContactItem,
  SocialBand,
  SocialLeft,
  SocialLabel,
  SnsList,
  SnsItem,
  FamilySelect,
  Address,
  Copyright,
} from './Footer.styles';

const COMPANY_LINKS = [
  { label: '회사소개', path: '#' },
  { label: '지속가능성', path: '#' },
  { label: '뉴스룸', path: '/newsroom' },
  { label: '채용 게시판', path: '#' },
];

const SHOP_LINKS = [
  { label: '신상품', path: '/products' },
  { label: '베스트셀러', path: '/products' },
  { label: '컬렉션', path: '/products' },
  { label: '세일', path: '/products' },
];

const SUPPORT_LINKS = [
  { label: '고객센터', path: '#' },
  { label: '배송 / 반품', path: '#' },
  { label: '사이즈 가이드', path: '#' },
  { label: 'FAQ', path: '#' },
  { label: '개인정보처리방침', path: '#' },
];

const FAMILY_SITES = [
  { label: 'FAMILY SITE', value: '' },
  { label: 'THE NORTH FACE GLOBAL', value: 'https://www.thenorthface.com' },
  { label: 'THE NORTH FACE KOREA', value: 'https://www.thenorthfacekorea.co.kr' },
  { label: 'TIMBERLAND', value: '#' },
  { label: 'VANS', value: '#' },
];

function Footer() {
  const [email, setEmail] = useState('');

  const handleFamilySite = (e) => {
    const url = e.target.value;
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`${email} 로 뉴스레터 구독이 신청되었습니다.`);
    setEmail('');
  };

  return (
    <FooterWrapper>
      <FooterInner>
        {/* 브랜드 슬로건 + 뉴스레터 (50:50) */}
        <TopBand>
          <BrandCol>
            <BrandSlogan>NEVER STOP EXPLORING</BrandSlogan>
            <BrandSubline>
              1966년부터, 우리는 자연을 향한 탐험을 멈추지 않습니다.
            </BrandSubline>
          </BrandCol>

          <NewsletterCol>
            <NewsletterText>
              <NewsletterTitle>
                <TbMail />
                JOIN THE EXPEDITION
              </NewsletterTitle>
              <NewsletterDesc>
                새 컬렉션과 한정 컬래버레이션 소식을 가장 먼저 받아보세요.
              </NewsletterDesc>
            </NewsletterText>
            <NewsletterForm onSubmit={handleNewsletter}>
              <NewsletterInput
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <NewsletterSubmit type="submit">
                SUBSCRIBE
                <TbArrowRight />
              </NewsletterSubmit>
            </NewsletterForm>
          </NewsletterCol>
        </TopBand>

        {/* 링크 그리드 */}
        <FooterGrid>
          <LinkColumn>
            <ColumnTitle>COMPANY</ColumnTitle>
            <LinkList>
              {COMPANY_LINKS.map((item) => (
                <LinkItem key={item.label}>
                  <a href={item.path}>{item.label}</a>
                </LinkItem>
              ))}
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>SHOP</ColumnTitle>
            <LinkList>
              {SHOP_LINKS.map((item) => (
                <LinkItem key={item.label}>
                  <a href={item.path}>{item.label}</a>
                </LinkItem>
              ))}
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>SUPPORT</ColumnTitle>
            <LinkList>
              {SUPPORT_LINKS.map((item) => (
                <LinkItem key={item.label}>
                  <a href={item.path}>{item.label}</a>
                </LinkItem>
              ))}
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>STORE & CONTACT</ColumnTitle>
            <ContactCol>
              <ContactItem>
                <TbPhone />
                <span>
                  <strong>1800-6166</strong>
                  고객센터 전화 문의
                </span>
              </ContactItem>
              <ContactItem>
                <TbClock />
                <span>
                  평일 10:00 — 17:00
                  <br />
                  점심 12:00 — 13:00 (주말·공휴일 휴무)
                </span>
              </ContactItem>
              <ContactItem>
                <TbMapPin />
                <span>전국 매장 찾기 →</span>
              </ContactItem>
            </ContactCol>
          </LinkColumn>
        </FooterGrid>

        {/* SNS + 패밀리 사이트 */}
        <SocialBand>
          <SocialLeft>
            <SocialLabel>FOLLOW US</SocialLabel>
            <SnsList>
              <SnsItem href="#" aria-label="Instagram">
                <TbBrandInstagram />
              </SnsItem>
              <SnsItem href="#" aria-label="YouTube">
                <TbBrandYoutube />
              </SnsItem>
              <SnsItem href="#" aria-label="Facebook">
                <TbBrandFacebook />
              </SnsItem>
              <SnsItem href="#" aria-label="X">
                <TbBrandX />
              </SnsItem>
            </SnsList>
          </SocialLeft>

          <FamilySelect onChange={handleFamilySite} defaultValue="">
            {FAMILY_SITES.map((site, idx) => (
              <option key={idx} value={site.value} disabled={idx === 0}>
                {site.label}
              </option>
            ))}
          </FamilySelect>
        </SocialBand>

        {/* 주소 / 카피라이트 */}
        <Address>
          <Copyright>
            © {new Date().getFullYear()} THE NORTH FACE KOREA, LTD. All Rights Reserved.
          </Copyright>
          <p>
            (주) 영원아웃도어 ㅣ 대표이사 : 성기학 ㅣ 사업자 등록번호 : 110-81-27101
            ㅣ 통신판매업 신고 : 2013-경기성남-0984 ㅣ Email : info@northface.co.kr
          </p>
          <p>
            반송지 주소 : 경기도 이천시 마장면 프리미엄 아울렛로33-20 ㅣ 개인정보보호책임자 : 김은영
          </p>
          <p>이 사이트는 포트폴리오용으로 제작되었습니다.</p>
        </Address>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
