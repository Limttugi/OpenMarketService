import styled from 'styled-components';
import Layout from 'components/Layout/Layout';
import { getProductDetail } from 'apis/products';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { productIdState, productSelectedMenuIndex } from 'recoil/atoms/product';
import { useState } from 'react';
import { productI } from './ProductList';
import ProductNamePrice from 'components/ProductDetailPage/NamePrice/ProductNamePrice';
import { useCallback } from 'react';
import MButton from 'components/Button/Size/Medium/M-Button';
import ProductQuantityButton from 'components/ProductDetailPage/QuantityButton/ProductQuantityButton';
import ProductDetailTotalQuantityPrice from 'components/ProductDetailPage/TotalQuantityPrice/ProductDetailTotalQuantityPrice';
import MDarkButton from 'components/Button/Size/Medium/M-Dark-Button';
import PRODUCT_DETAIL_PAGE_MENU_LIST from 'constants/PRODUCT_DETAIL_PAGE_MENU_LIST';
import TapButton from 'components/Button/Tap/TapButton';

const ProductDetail = () => {
  const productId = useRecoilValue(productIdState);
  const [detailInfo, setDetailInfo] = useState<productI>();
  const [namePrice] = useState({
    store_name: undefined,
    product_name: undefined,
    price: undefined,
  });
  const setSelectedMenuIndex = useSetRecoilState(productSelectedMenuIndex);

  const handleGetProductDetail = useCallback(
    async (productId: number | undefined) => {
      const res = await getProductDetail(productId);
      const info = res.data;

      setDetailInfo(info);
      namePrice.store_name = info.store_name;
      namePrice.product_name = info.product_name;
      namePrice.price = info.price;
    },
    [namePrice],
  );

  useEffect(() => {
    handleGetProductDetail(productId);
  }, [handleGetProductDetail, productId]);

  return (
    <Layout>
      <Container>
        <ProductImageInfoContainer>
          <ProductImage src={detailInfo?.image} />
          <ProductInfoContainer>
            <ProductNamePrice
              storeNameFontSize='1.8rem'
              productNameFontSize='3.6rem'
              productNameMargin='1.6rem 0 2rem 0'
              priceFontSize='3.6rem'
              wonFontSize='1.8rem'
              wonLineHeight='2.3rem'
              namePrice={namePrice}
            />
            <DeliveryText>택배배송 / 무료배송</DeliveryText>
            <ProductQuantityButton />
            {namePrice.price && <ProductDetailTotalQuantityPrice price={namePrice.price} />}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
              <MButton text='바로 구매' width='41.6rem' />
              <MDarkButton text='장바구니' width='20rem' />
            </div>
          </ProductInfoContainer>
        </ProductImageInfoContainer>

        <ProductMenuContainer>
          {PRODUCT_DETAIL_PAGE_MENU_LIST.map((list, index) => {
            return (
              <TapButton
                key={list + index}
                text={list}
                width='32rem'
                onClickEvent={() => {
                  setSelectedMenuIndex(index);
                }}
                index={index}
              />
            );
          })}
        </ProductMenuContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 32rem;
  margin-top: 8rem;
`;

const ProductImageInfoContainer = styled.div`
  display: flex;
`;

const ProductImage = styled.img`
  width: 60rem;
  height: 60rem;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 5rem;
`;

const DeliveryText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #767676;
  margin: 13.8rem 0 2rem 0;
`;

const ProductMenuContainer = styled.div`
  margin-top: 14rem;
`;

export default ProductDetail;
