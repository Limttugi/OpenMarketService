import styled from 'styled-components';

export interface ProductNamePriceTextI {
  storeName: string;
  productName: string;
  price: number;
  page: string;
}

const ProductNamePriceText = ({ storeName, productName, price, page }: ProductNamePriceTextI) => {
  return (
    <>
      <StoreName page={page}>{storeName}</StoreName>
      <ProductName page={page}>{productName}</ProductName>
      <Price page={page}>
        {price}
        <Won page={page}>원</Won>
      </Price>
    </>
  );
};

export default ProductNamePriceText;

const StoreName = styled.p<{ page: string }>`
  font-weight: 400;
  color: #767676;
  font-size: ${props => (props.page === '/' ? '1.6rem' : '1.8rem')};
`;

const ProductName = styled.p<{ page: string }>`
  font-size: ${props => (props.page === '/' ? '1.8rem' : '3.6rem')};
  font-weight: 400;
  color: black;
  margin: ${props => (props.page === '/' ? '1rem 0' : '1.6rem 0 2rem 0')};
`;

const Price = styled.p<{ page: string }>`
  display: flex;
  align-items: baseline;
  font-size: ${props => (props.page === '/' ? '2.4rem' : '3.6rem')};
  font-weight: 700;
  color: black;
`;

const Won = styled.sub<{ page: string }>`
  font-size: ${props => (props.page === '/' ? '1.6rem' : '1.8rem')};
  color: black;
  line-height: ${props => (props.page === '/' ? '2rem' : '2.3rem')};
`;
