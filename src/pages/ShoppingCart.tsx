import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { bringCartList } from 'apis/cart';
import { Product_Info_In_ShoppingCart_I } from 'global_type_interface';
import ShoppingCartListNullError from 'components/Atoms/Error/ShoppingCartListNull-Error';
import ShoppingCartTemplate from 'components/Templates/ShoppingCart-Template';
import ShoppingCartItemContainer from 'components/Molecules/ListContainer/ShoppingCartItem-Container';

const ShoppingCart = () => {
  const [cartList, setCartList] = useState<Array<Product_Info_In_ShoppingCart_I>>([]);

  useEffect(() => {
    bringCartList()
      .then(res => {
        if (res.data.count === 0) return false;
        return setCartList(res.data.results);
      })
      .catch(err => {
        return console.error(err);
      });
  }, []);

  return (
    <ShoppingCartTemplate>
      <H2>장바구니</H2>

      <Form>
        <Table>
          <THead>
            <tr>
              <td>동그라미</td>
              <td>상품정보</td>
              <td>수량</td>
              <td>상품금액</td>
            </tr>
          </THead>

          <TBody>
            <>
              {cartList.length === 0 ? (
                <ShoppingCartListNullError />
              ) : (
                <ShoppingCartItemContainer cartList={cartList} />
              )}
            </>
          </TBody>
        </Table>
      </Form>
    </ShoppingCartTemplate>
  );
};

export default ShoppingCart;

const H2 = styled.h2`
  text-align: center;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.4rem;
  margin-bottom: 5.2rem;
`;

const Form = styled.form`
  border: 1px solid black;
`;

const Table = styled.table`
  width: 100%;
`;

const THead = styled.thead`
  height: 6rem;
  line-height: 6rem;
  background-color: #f2f2f2;
  font-size: 1.8rem;
  font-weight: 400;
  & > tr > td {
    border: 1px solid red;
    text-align: center;
    &:nth-child(1) {
      width: 8rem;
    }
    &:nth-child(2) {
      width: 67rem;
    }
    &:nth-child(3) {
      width: 15rem;
    }
    &:nth-child(4) {
      width: inherit;
    }
  }
`;

const TBody = styled.tbody``;
