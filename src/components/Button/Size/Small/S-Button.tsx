import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { SmallButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/Button';

interface SmallButtonI extends ButtonWidthPropsI {
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
