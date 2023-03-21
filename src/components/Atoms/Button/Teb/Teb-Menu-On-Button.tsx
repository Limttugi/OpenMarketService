import styled from 'styled-components';
import { Alram, TebMenuButtonCS } from '.';
import { mainColor } from 'styles/global';
import { CSS_I } from 'global_type_interface';

interface TebMenuOnButtonI extends Pick<CSS_I, 'width'> {
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
