import styled from 'styled-components';
import { ButtonPropsI } from '../ButtonCommon';
import { MediumButtonCS } from '.';

interface MDarkButtonI extends ButtonPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MDarkButton = ({ text, width }: MDarkButtonI) => {
  return (
    <Button width={width} color='#767676'>
      {text}
    </Button>
  );
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: ${props => props.color};
`;

export default MDarkButton;
