import styled from 'styled-components';
import { MediumButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/Button';

interface MDarkButtonI extends ButtonWidthPropsI {
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
