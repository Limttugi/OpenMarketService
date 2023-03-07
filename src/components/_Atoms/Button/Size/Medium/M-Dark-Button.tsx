import styled from 'styled-components';
import { MediumButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface MDarkButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MDarkButton = ({ text, width }: MDarkButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: #767676;
`;

export default MDarkButton;
