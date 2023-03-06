import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { MediumSmallButtonCS_16p } from '.';
import { ButtonPropsI } from '../ButtonCommon';

interface MediumSmallButtonI extends ButtonPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MediumSmallButton = ({ text, width }: MediumSmallButtonI) => {
  return (
    <Button width={width} color={mainColor}>
      {text}
    </Button>
  );
};

const Button = styled(MediumSmallButtonCS_16p)`
  border: none;
  color: white;
  background-color: ${props => props.color};
`;

export default MediumSmallButton;
