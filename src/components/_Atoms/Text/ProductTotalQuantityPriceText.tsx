import { useRecoilValue } from 'recoil';
import { productBuyQuantityState } from 'recoil/atoms/product';
import styled from 'styled-components';
import { mainColor } from 'styles/global';

interface ProductTotalQuantityPriceTextI {
  price: number;
}

const ProductTotalQuantityPriceText = ({ price }: ProductTotalQuantityPriceTextI) => {
  const quantity = useRecoilValue(productBuyQuantityState);

  return (
    <Container>
      <Text>총 상품 금액</Text>
      <TotalQuantityPriceContainer>
        <TotalQuantityText>
          총 수량&nbsp;<Quantity color={mainColor}>{quantity}</Quantity>개
        </TotalQuantityText>
        <TotalPriceText color={mainColor}>
          {price * quantity}
          <Won>원</Won>
        </TotalPriceText>
      </TotalQuantityPriceContainer>
    </Container>
  );
};

export default ProductTotalQuantityPriceText;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.3rem;
  margin-top: 0.2rem;
`;

const TotalQuantityPriceContainer = styled.div`
  display: flex;
  align-items: end;
`;

const TotalQuantityText = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.3rem;
  color: #767676;
  margin-bottom: 1.2rem;
  &::after {
    content: '';
    border-right: 1px solid #c4c4c4;
    margin: 0 1.1rem;
  }
`;

const TotalPriceText = styled.p`
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.5rem;
  color: ${props => props.color};
`;

const Quantity = styled.p`
  font-style: normal;
  color: ${props => props.color};
`;

const Won = styled.sub`
  vertical-align: middle;
  font-size: 1.8rem;
  font-weight: 400;
`;
