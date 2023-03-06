import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { SmallButtonCS } from '.';
import { ButtonPropsI } from '../ButtonCommon';

interface SmallWhiteButtonI extends ButtonPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const SmallWhiteButton = ({ text, width }: SmallWhiteButtonI) => {
  return (
    <Button width={width} color={mainColor}>
      {text}
    </Button>
  );
};

const Button = styled(SmallButtonCS)`
  border: 1px solid #c4c4c4;
  color: #767676;
  background-color: ${props => props.color};
  &:hover {
    border: 1px solid #767676;
    color: black;
  }
`;

export default SmallWhiteButton;
