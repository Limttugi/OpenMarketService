import { Product_Info_In_ShoppingCart_I } from 'global_type_interface';
import styled from 'styled-components';
import ShoppingCartItemList from '../ListItem/ShoppingCartItem-List';

const ShoppingCartItemContainer = ({ cartList }: { cartList: Array<Product_Info_In_ShoppingCart_I> }) => {
  return (
    <Container>
      {cartList.map((list: Product_Info_In_ShoppingCart_I) => {
        const { my_cart, cart_item_id, product_id, quantity, is_active } = list;

        return (
          <ShoppingCartItemList
            key={list.product_id}
            my_cart={my_cart}
            cart_item_id={cart_item_id}
            product_id={product_id}
            cartQuantity={quantity}
            is_active={is_active}
          />
        );
      })}
    </Container>
  );
};

export default ShoppingCartItemContainer;

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
