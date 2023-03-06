import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { SmallButtonCS } from '.';
import { ButtonPropsI } from '../ButtonCommon';

interface SmallButtonI extends ButtonPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const SmallButton = ({ text, width }: SmallButtonI) => {
  return (
    <Button width={width} color={mainColor}>
      {text}
    </Button>
  );
};

const Button = styled(SmallButtonCS)`
  border: none;
  color: white;
  background-color: ${props => props.color};
`;

export default SmallButton;
