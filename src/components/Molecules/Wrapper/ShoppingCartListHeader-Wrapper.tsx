import styled from 'styled-components';
import { mainColor } from 'styles/global';

const ShoppingCartListHeaderWrapper = () => {
  return (
    <Wrapper>
      <Circle />
      <Text margin='0 33.8rem 0 31.4rem'>상품정보</Text>
      <Text margin='0 23.8rem 0 0'>수량</Text>
      <Text>상품금액</Text>
    </Wrapper>
  );
};

export default ShoppingCartListHeaderWrapper;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  height: 6rem;
  background-color: #f2f2f2;
  margin-bottom: 3.5rem;
`;

const Circle = styled.div`
  border: 2px solid ${mainColor};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin-left: 3rem;
`;

const Text = styled.div<{ margin?: string }>`
  font-size: 1.8rem;
  font-weight: 400;
  color: black;
  margin: ${props => props.margin};
`;
