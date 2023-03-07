import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { SmallButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface SmallButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const SmallButton = ({ text, width }: SmallButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(SmallButtonCS)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;

export default SmallButton;
