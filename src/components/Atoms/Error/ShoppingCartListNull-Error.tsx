import styled from 'styled-components';

const ShoppingCartListNullError = () => {
  return (
    <tr>
      <Td colSpan={4}>
        <Strong>장바구니에 담긴 상품이 없습니다</Strong>
        원하는 상품을 장바구니에 담아보세요!
      </Td>
    </tr>
  );
};

export default ShoppingCartListNullError;

const Td = styled.td`
  text-align: center;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: #767676;
`;

const Strong = styled.strong`
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
  margin-bottom: 1.7rem;
  margin-top: 20rem;
`;
