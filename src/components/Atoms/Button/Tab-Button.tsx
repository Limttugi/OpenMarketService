import styled from 'styled-components';
import { mainColor } from 'styles/global';

import { useRecoilValue } from 'recoil';
import { productSelectedMenuIndex } from 'recoil/atoms/product';
import { CSS_I } from 'global_type_interface';
import { ButtonCS } from '.';

interface TabButtonI extends Pick<CSS_I, 'width'> {
  text: string;
  index: number;
  onClickEvent?: () => void;
}

interface TabButtonStylePropsI {
  isActive: boolean;
}

const TabButton = ({ text, width, index, onClickEvent }: TabButtonI) => {
  const selectedMenuIndex = useRecoilValue(productSelectedMenuIndex);

  return (
    <Button width={width} isActive={selectedMenuIndex === index ? true : false} onClick={onClickEvent}>
      {text}
    </Button>
  );
};

const Button = styled(ButtonCS)<TabButtonStylePropsI>`
  position: relative;
  border: none;
  height: 6rem;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.3rem;
  background-color: white;
  color: ${props => (props.isActive ? mainColor : '#767676')};
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.6rem;
    background: ${props => (props.isActive ? mainColor : '#e0e0e0')};
  }
`;

export default TabButton;
