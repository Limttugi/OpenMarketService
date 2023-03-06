import styled from 'styled-components';
import { ButtonWidthPropsI } from 'components/Button';
import { Alram, TebMenuButtonCS } from '.';

interface TebMenuOffButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const TebMenuOffButton = ({ text, width }: TebMenuOffButtonI) => {
  return (
    <Button width={width} color='wthie'>
      <p>{text}</p>
      <Alram>1</Alram>
    </Button>
  );
};

const Button = styled(TebMenuButtonCS)`
  background-color: ${props => props.color};
  color: black;
  &:hover {
    background-color: #effff3;
  }
`;

export default TebMenuOffButton;
