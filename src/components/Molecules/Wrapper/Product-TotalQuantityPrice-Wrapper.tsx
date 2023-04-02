import styled from 'styled-components';

import { mainColor } from 'styles/global';
import ProductPriceText from 'components/Atoms/Text/Product-Price-Text';

interface ProductTotalQuantityPriceWrapper_I {
  price: number;
  numberOfProductToBuy: number;
}

const ProductTotalQuantityPriceWrapper = ({ price, numberOfProductToBuy }: ProductTotalQuantityPriceWrapper_I) => {
  return (
    <ProductTotalQuantityPriceContainer>
      총 상품 금액
      <TotalQuantityPriceContainer>
        <TotalQuantityText>
          총 수량 <Quantity>{numberOfProductToBuy}</Quantity>개
        </TotalQuantityText>

        <ProductPriceText
          price={price * numberOfProductToBuy}
          fontSize='3.6rem'
          subFontSize='1.8rem'
          color={mainColor}
        />
      </TotalQuantityPriceContainer>
    </ProductTotalQuantityPriceContainer>
  );
};

export default ProductTotalQuantityPriceWrapper;

const ProductTotalQuantityPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.3rem;
`;

const TotalQuantityPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TotalQuantityText = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #767676;
  margin-bottom: 0.4rem;
  &::after {
    content: '';
    border-right: 1px solid #c4c4c4;
    margin: 0 1.1rem 0.3rem 1.1rem;
  }
`;

const Quantity = styled.span`
  color: ${mainColor};
  font-weight: 700;
`;
