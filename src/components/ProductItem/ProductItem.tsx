import { productI } from 'pages/ProductList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductItem = ({ product_id, image, store_name, product_name, price }: productI) => {
  return (
    <ProductContainer to={`detail/${product_id}`}>
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

const StoreName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #767676;
`;

const ProductName = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 1rem 0;
  color: black;
`;

const Price = styled.p`
  display: flex;
  align-items: baseline;
  font-size: 2.4rem;
  font-weight: 700;
  color: black;
`;

const Won = styled.sub`
  font-size: 1.6rem;
  line-height: 2rem;
  color: black;
`;

export default ProductItem;
