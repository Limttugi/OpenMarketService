import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { MediumButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface MButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MButton = ({ text, width }: MButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;

export default MButton;
