import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { ButtonWidthPropsI } from 'components/Button';
import { TapButtonCS } from '.';

interface TapActiveButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const TapActiveButton = ({ text, width }: TapActiveButtonI) => {
  return (
    <Button width={width} color={mainColor}>
      {text}
    </Button>
  );
};

const Button = styled(TapButtonCS)`
  color: ${props => props.color};
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.6rem;
    background: ${props => props.color};
  }
`;

export default TapActiveButton;
