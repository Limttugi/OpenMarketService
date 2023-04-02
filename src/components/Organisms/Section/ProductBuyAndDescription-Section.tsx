import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { handleGetProductDetail } from 'recoil/selectors/product';
import ProductImage from 'components/Atoms/Image/Product-Image';
import ProductNameText from 'components/Atoms/Text/Product-Name-Text';
import ProductPriceText from 'components/Atoms/Text/Product-Price-Text';
import ProductStoreNameText from 'components/Atoms/Text/Product-StoreName-Text';
import ProductQuantityButton from 'components/Atoms/Button/ProductQuantity-Button';
import MButton from 'components/Atoms/Button/Size/Medium/M-Button';
import MDarkButton from 'components/Atoms/Button/Size/Medium/M-Dark-Button';
import ProductTotalQuantityPriceWrapper from 'components/Molecules/Wrapper/Product-TotalQuantityPrice-Wrapper';
import DeliveryText from 'components/Atoms/Text/Delivery-Text';
import useShoppingCart from 'hooks/useShoppingCart';

const ProductBuyAndDescriptionSection = () => {
  const { numberOfProductToBuy, handleSetnumberOfProductToBuy } = useShoppingCart();
  const productDetail = useRecoilValue(handleGetProductDetail);

  return (
    <section>
      <ProductBuyContainer>
        <ProductImage
          image={productDetail.image}
          width='60rem'
          height='60rem'
          product_name={productDetail.product_name}
        />

        <RightContainer>
          <ProductNameTextWrapper>
            <ProductStoreNameText store_name={productDetail.store_name} fontSize='1.8rem' />
            <ProductNameText product_name={productDetail.product_name} fontSize='3.6rem' margin='3.1rem 0 3.5rem 0' />
            <ProductPriceText price={productDetail.price} fontSize='3.6rem' subFontSize='1.8rem' color='black' />
          </ProductNameTextWrapper>

          <DeliveryText fontSize='1.6rem' fontWeight='400' lineHeight='2rem' margin='13.8rem 0 2rem 0' />

          <DividingLine />
          <ProductQuantityButton
            stock={productDetail.stock}
            handleSetnumberOfProductToBuy={handleSetnumberOfProductToBuy}
          />
          <DividingLine />

          <ProductTotalQuantityPriceWrapper price={productDetail.price} numberOfProductToBuy={numberOfProductToBuy} />
          <ButtonContainer>
            <MButton text='바로 구매' width='41.6rem' />
            <MDarkButton text='장바구니' width='20rem' />
          </ButtonContainer>
        </RightContainer>
      </ProductBuyContainer>
    </section>
  );
};

export default ProductBuyAndDescriptionSection;

const ProductBuyContainer = styled.div`
  display: flex;
  gap: 0 5rem;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProductNameTextWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

const DividingLine = styled.hr`
  border: none;
  background-color: #c4c4c4;
  width: 100%;
  height: 2px;
  &:nth-of-type(2) {
    margin-bottom: 3.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
