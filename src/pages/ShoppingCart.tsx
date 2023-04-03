import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { bringCartList } from 'apis/cart';
import { Product_Info_In_ShoppingCart_I } from 'global_type_interface';
import ShoppingCartListNullError from 'components/Atoms/Error/ShoppingCartListNull-Error';
import ShoppingCartTemplate from 'components/Templates/ShoppingCart-Template';
import ShoppingCartItemContainer from 'components/Molecules/ListContainer/ShoppingCartItem-Container';
import ShoppingCartTotalPriceWrapper from 'components/Molecules/Wrapper/ShoppingCartTotalPrice-Wrapper';
import ShoppingCartListHeaderWrapper from 'components/Molecules/Wrapper/ShoppingCartListHeader-Wrapper';
import LButton from 'components/Atoms/Button/Size/Large/L-Button';

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
        <ShoppingCartListHeaderWrapper />
        {cartList.length === 0 ? <ShoppingCartListNullError /> : <ShoppingCartItemContainer cartList={cartList} />}
        <ShoppingCartTotalPriceWrapper />
        <LButton text='주문하기' width='22rem' />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16rem;
`;
