import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { MediumButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/Button';

interface MButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MButton = ({ text, width }: MButtonI) => {
  return (
    <Button width={width} color={mainColor}>
      {text}
    </Button>
  );
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: ${props => props.color};
`;

export default MButton;
