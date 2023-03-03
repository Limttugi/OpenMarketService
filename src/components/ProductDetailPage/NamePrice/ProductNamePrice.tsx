import styled from 'styled-components';
import { PriceCS, ProductNameCS, StoreNameCS, WonCS } from 'styles/product';

export interface namePriceI {
  store_name: string | undefined;
  product_name: string | undefined;
  price: number | undefined;
}

export interface ProductNamePriceI {
  storeNameFontSize: string;
  productNameFontSize: string;
  productNameMargin: string;
  priceFontSize: string;
  wonFontSize: string;
  wonLineHeight: string;
  namePrice: namePriceI | undefined;
}

const ProductNamePrice = (props: ProductNamePriceI) => {
  const {
    storeNameFontSize,
    productNameFontSize,
    productNameMargin,
    priceFontSize,
    wonFontSize,
    wonLineHeight,
    namePrice,
  } = props;

  return (
    <>
      <StoreName fontSize={storeNameFontSize}>{namePrice?.store_name}</StoreName>
      <ProductName fontSize={productNameFontSize} margin={productNameMargin}>
        {namePrice?.product_name}
      </ProductName>
      <Price fontSize={priceFontSize}>
        {namePrice?.price}
        <Won fontSize={wonFontSize} lineHeight={wonLineHeight}>
          원
        </Won>
      </Price>
    </>
  );
};

const StoreName = styled(StoreNameCS)<{ fontSize: string }>`
  font-size: ${props => props.fontSize};
`;

const ProductName = styled(ProductNameCS)<{ fontSize: string; margin: string }>`
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
`;

const Price = styled(PriceCS)<{ fontSize: string }>`
  font-size: ${props => props.fontSize};
`;

const Won = styled(WonCS)<{ fontSize: string; lineHeight: string }>`
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`;

export default ProductNamePrice;
