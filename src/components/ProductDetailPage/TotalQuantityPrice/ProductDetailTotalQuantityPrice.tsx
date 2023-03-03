import { useRecoilValue } from 'recoil';
import { productBuyQuantityState } from 'recoil/atoms/product';
import styled from 'styled-components';
import { mainColor } from 'styles/global';

interface priceI {
  price: number;
}

const ProductDetailTotalQuantityPrice = ({ price }: priceI) => {
  const quantity = useRecoilValue(productBuyQuantityState);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <TotalPriceKoreanText>총 상품 금액</TotalPriceKoreanText>
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <TotalQuantityText>
          총 수량 <Quantity color={mainColor}>{quantity}</Quantity>개
        </TotalQuantityText>
        <PriceText color={mainColor}>
          {price * quantity}
          <Won>원</Won>
        </PriceText>
      </div>
    </div>
  );
};

const TotalPriceKoreanText = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.3rem;
  margin-top: 0.2rem;
`;

const TotalQuantityText = styled.span`
  display: inline-block;
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

const PriceText = styled.span`
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.5rem;
  color: ${props => props.color};
`;

const Quantity = styled.span`
  color: ${props => props.color};
`;

const Won = styled.sub`
  vertical-align: middle;
  font-size: 1.8rem;
  font-weight: 400;
`;

export default ProductDetailTotalQuantityPrice;
