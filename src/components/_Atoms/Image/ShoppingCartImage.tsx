import styled from 'styled-components';
import ShoppingCartSvg from 'img/icon-shopping-cart.svg';
import ShoppingCartActiveSvg from 'img/icon-shopping-cart-2.svg';

export const ShoppingCartImage = () => {
  return <Image src={ShoppingCartSvg} />;
};

export const ShoppingCartActiveImage = () => {
  return <Image src={ShoppingCartActiveSvg} />;
};

const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  margin: 0 0.4rem 0.1rem 0;
`;
