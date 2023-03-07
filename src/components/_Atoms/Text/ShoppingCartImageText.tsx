import styled from 'styled-components';

interface ShoppingCartImageTextI {
  textColor: string;
}

const ShoppingCartImageText = ({ textColor }: ShoppingCartImageTextI) => {
  return <Text color={textColor}>장바구니</Text>;
};

export default ShoppingCartImageText;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => props.color};
`;
