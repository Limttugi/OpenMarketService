import styled from 'styled-components';
import { useQuery } from 'react-query';

import { bringCartList } from 'apis/cart';
import ShoppingCartListNullError from 'components/Atoms/Error/ShoppingCartListNull-Error';
import ShoppingCartTemplate from 'components/Templates/ShoppingCart-Template';
import ShoppingCartItemContainer from 'components/Molecules/ListContainer/ShoppingCartItem-Container';
import ShoppingCartTotalPriceWrapper from 'components/Molecules/Wrapper/ShoppingCartTotalPrice-Wrapper';
import ShoppingCartListHeaderWrapper from 'components/Molecules/Wrapper/ShoppingCartListHeader-Wrapper';
import LButton from 'components/Atoms/Button/Size/Large/L-Button';
import ShoppingCartActionText from 'components/Atoms/Text/ShoppingCartAction-Text';

const ShoppingCart = () => {
  const { data, isLoading, isError } = useQuery('cartList', bringCartList);

  return (
    <ShoppingCartTemplate>
      <ShoppingCartActionText text='장바구니' />

      <Form>
        <ShoppingCartListHeaderWrapper />
        {isError || isLoading ? (
          <ShoppingCartListNullError />
        ) : (
          <>
            <ShoppingCartItemContainer cartList={data?.data.results} />
            <ShoppingCartTotalPriceWrapper />
            <LButton text='주문하기' width='22rem' />
          </>
        )}
      </Form>
    </ShoppingCartTemplate>
  );
};

export default ShoppingCart;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16rem;
`;
