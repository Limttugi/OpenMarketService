import styled from 'styled-components';
import { mainColor } from 'styles/global';

const CheckBoxInput = ({ productId, isChecked }: { productId: number; isChecked: boolean }) => {
  return (
    <>
      <Input id={`checked${productId}`} />
      <Label htmlFor={`checked${productId}`} isChecked={isChecked} />
    </>
  );
};

export default CheckBoxInput;

const Input = styled.input.attrs({ type: 'button' })`
  display: none;
`;

const Label = styled.label<{ isChecked: boolean }>`
  position: relative;
  cursor: pointer;
  &::before {
    position: absolute;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: '';
    display: block;
    width: 2rem;
    height: 2rem;
    border: 2px solid ${mainColor};
    border-radius: 50%;
    background-color: white;
  }
  &::after {
    display: ${props => props.isChecked === false && 'none'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${mainColor};
  }
`;
