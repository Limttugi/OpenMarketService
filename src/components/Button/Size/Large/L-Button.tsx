import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { LargeButtonCS } from '.';
import { ButtonBySizeI } from '..';

interface LButtonI extends ButtonBySizeI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const LButton = ({ text, width }: LButtonI) => {
  return (
    <Button width={width} color={mainColor}>
      {text}
    </Button>
  );
};

const Button = styled(LargeButtonCS)`
  border: none;
  color: white;
  background-color: ${props => props.color};
`;

export default LButton;
