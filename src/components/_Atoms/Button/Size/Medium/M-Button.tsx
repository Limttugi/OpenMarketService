import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { MediumButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface MButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: () => void;
}

const MButton = ({ text, width, onClickEvent }: MButtonI) => {
  return (
    <Button width={width} onClick={onClickEvent}>
      {text}
    </Button>
  );
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;

export default MButton;
