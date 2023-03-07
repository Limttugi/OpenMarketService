import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { productIdState } from 'recoil/atoms/product';
import { useSetRecoilState } from 'recoil';
import { ProductImageInMainPage } from 'components/_Atoms/Image/ProductImage';
import ProductNamePrice from 'components/_Atoms/Text/ProductNamePriceText';

export interface ProductDetailLinkI {
  image: string;
  productId: number;
  storeName: string;
  productName: string;
  price: number;
}

const ProductDetailLink = ({ productId, image, storeName, productName, price }: ProductDetailLinkI) => {
  const setProductId = useSetRecoilState(productIdState);
  const handleSetProductId = () => setProductId(productId);

  return (
    <Wrapper>
      <ProductContainer to={`detail/${productId}`} onClick={handleSetProductId}>
        <ProductImageInMainPage image={image} />
        <ProductNamePrice storeName={storeName} productName={productName} price={price} page='/' />
      </ProductContainer>
    </Wrapper>
  );
};

export default ProductDetailLink;

const Wrapper = styled.li`
  width: 38rem;
  height: 49rem;
`;

const ProductContainer = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
