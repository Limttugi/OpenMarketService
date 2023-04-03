import styled from 'styled-components';

import ProductPriceText from 'components/Atoms/Text/Product-Price-Text';
import MinusImage from 'img/icon-minus-line.svg';
import PlusImage from 'img/icon-plus-line.svg';

const ShoppingCartTotalPriceWrapper = () => {
  return (
    <Wrapper>
      <TextContainer style={{ width: '30rem' }}>
        <div>총 상품금액</div>
        <ProductPriceText price={0} fontSize='2.4rem' subFontSize='1.8rem' color='black' alignItems='center' />
      </TextContainer>

      <ImageContainer src={MinusImage} alt='' />

      <TextContainer style={{ width: '28.5rem' }}>
        <div>상품 할인</div>
        <ProductPriceText price={0} fontSize='2.4rem' subFontSize='1.8rem' color='black' alignItems='center' />
      </TextContainer>

      <ImageContainer src={PlusImage} alt='' />

      <TextContainer style={{ width: '29rem' }}>
        <div>배송비</div>
        <ProductPriceText price={0} fontSize='2.4rem' subFontSize='1.8rem' color='black' alignItems='center' />
      </TextContainer>

      <TextContainer>
        <div>결제 예정 금액</div>
        <ProductPriceText price={0} fontSize='3.6rem' subFontSize='1.8rem' color='#eb5757' alignItems='center' />
      </TextContainer>
    </Wrapper>
  );
};

export default ShoppingCartTotalPriceWrapper;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 1rem;
  background-color: #f2f2f2;
  height: 15rem;
  margin-top: 8rem;
  margin-bottom: 4rem;
`;

const ImageContainer = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  padding: 0.75rem;
  background-color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  & > div {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  &:last-child {
    flex: 1;
  }
`;
