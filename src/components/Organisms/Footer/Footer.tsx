import FooterLinkContainer from 'components/Molecules/ListContainer/FooterLink-Container';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinkContainer />
      <Hr />
      <Address>
        <AddressName>(주)HODU SHOP</AddressName>
        제주특별자치도 제주시 동광고 137 제주코딩베이스캠프
        <br />
        사업자번호 : 000-0000-0000 | 통신판매업
        <br />
        대표 : 김호두
      </Address>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 5.4rem 32rem;
  background-color: #f2f2f2;
`;

const Hr = styled.hr`
  width: 100%;
  margin: 2.2rem 0 3rem 0;
  background-color: #c4c4c4;
`;

const Address = styled.address`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #767676;
`;

const AddressName = styled.h2`
  font-weight: 700;
`;
