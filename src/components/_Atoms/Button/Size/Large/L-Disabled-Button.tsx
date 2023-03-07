import styled from 'styled-components';
import { LargeButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface LDisabledButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const LDisabledButton = ({ text, width }: LDisabledButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(LargeButtonCS)`
  border: none;
  color: white;
  background-color: #c4c4c4;
`;

export default LDisabledButton;
