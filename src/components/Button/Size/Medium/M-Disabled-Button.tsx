import styled from 'styled-components';
import { ButtonBySizeI } from '..';
import { MediumButtonCS } from '.';

interface MDisabledButtonI extends ButtonBySizeI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MDisabledButton = ({ text, width }: MDisabledButtonI) => {
  return (
    <Button width={width} color='#c4c4c4'>
      {text}
    </Button>
  );
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: ${props => props.color};
`;

export default MDisabledButton;
