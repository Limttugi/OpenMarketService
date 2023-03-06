import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { LargeButtonCS } from '.';
import { ButtonPropsI } from '../ButtonCommon';

interface LButtonI extends ButtonPropsI {
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
