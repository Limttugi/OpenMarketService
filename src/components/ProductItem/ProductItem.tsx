import { productI } from 'pages/ProductList';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { productIdState } from 'recoil/atoms/product';
import styled from 'styled-components';
import { PriceCS, ProductNameCS, StoreNameCS, WonCS } from 'styles/product';

const ProductItem = ({ product_id, image, store_name, product_name, price }: productI) => {
  const setProductId = useSetRecoilState(productIdState);

  const handleSetProductId = () => setProductId(product_id);

  return (
    <ProductContainer to={`detail/${product_id}`} onClick={handleSetProductId}>
      <Image src={image} alt='productImage' />
      <StoreName>{store_name}</StoreName>
      <ProductName>{product_name}</ProductName>
      <Price>
        {price}
        <Won>원</Won>
      </Price>
    </ProductContainer>
  );
};

const ProductContainer = styled(Link)`
  width: 38rem;
  height: 49rem;
  text-decoration: none;
`;

const Image = styled.img`
  border: 1px solid #c4c4c4;
  width: 100%;
  height: 38rem;
  border-radius: 1rem;
  margin-bottom: 1.6rem;
`;

const StoreName = styled(StoreNameCS)`
  font-size: 1.6rem;
`;

const ProductName = styled(ProductNameCS)`
  font-size: 1.8rem;
  margin: 1rem 0;
`;

const Price = styled(PriceCS)`
  font-size: 2.4rem;
`;

const Won = styled(WonCS)`
  font-size: 1.6rem;
  line-height: 2rem;
`;

export default ProductItem;
