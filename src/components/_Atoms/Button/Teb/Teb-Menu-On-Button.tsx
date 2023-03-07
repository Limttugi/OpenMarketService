import styled from 'styled-components';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';
import { Alram, TebMenuButtonCS } from '.';
import { mainColor } from 'styles/global';

interface TebMenuOnButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const TebMenuOnButton = ({ text, width }: TebMenuOnButtonI) => {
  return (
    <Button width={width} color={mainColor}>
      <p>{text}</p>
      <Alram>1</Alram>
    </Button>
  );
};

const Button = styled(TebMenuButtonCS)`
  background-color: ${props => props.color};
  color: white;
`;

export default TebMenuOnButton;
