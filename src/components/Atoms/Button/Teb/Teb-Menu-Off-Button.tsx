import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { Alram, TebMenuButtonCS } from '.';

interface TebMenuOffButtonI extends Pick<CSS_I, 'width'> {
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
