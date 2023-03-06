import styled from 'styled-components';
import { ButtonPropsI } from '../ButtonCommon';
import { MediumButtonCS } from '.';

interface MWhiteButtonI extends ButtonPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MWhiteButton = ({ text, width }: MWhiteButtonI) => {
  return (
    <Button width={width} color='white'>
      {text}
    </Button>
  );
};

const Button = styled(MediumButtonCS)`
  border: 1px solid #c4c4c4;
  color: #767676;
  background-color: ${props => props.color};
`;

export default MWhiteButton;
