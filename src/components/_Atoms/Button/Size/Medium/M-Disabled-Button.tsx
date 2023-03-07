import styled from 'styled-components';
import { MediumButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface MDisabledButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MDisabledButton = ({ text, width }: MDisabledButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: #c4c4c4;
`;

export default MDisabledButton;
