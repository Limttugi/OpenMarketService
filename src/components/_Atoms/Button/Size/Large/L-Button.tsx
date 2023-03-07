import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { LargeButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface LButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const LButton = ({ text, width }: LButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(LargeButtonCS)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;

export default LButton;
