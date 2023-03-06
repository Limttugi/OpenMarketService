import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { ButtonCS, ButtonWidthPropsI } from 'components/Button';
import { useRecoilValue } from 'recoil';
import { productSelectedMenuIndex } from 'recoil/atoms/product';

interface TapButtonI extends ButtonWidthPropsI {
  text: string;
  index: number;
  onClickEvent?: () => void;
}

interface TapButtonStylePropsI {
  isActive: boolean;
}

const TapButton = ({ text, width, index, onClickEvent }: TapButtonI) => {
  const selectedMenuIndex = useRecoilValue(productSelectedMenuIndex);

  return (
    <Button width={width} isActive={selectedMenuIndex === index ? true : false} onClick={onClickEvent}>
      {text}
    </Button>
  );
};

const Button = styled(ButtonCS)<TapButtonStylePropsI>`
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

export default TapButton;
