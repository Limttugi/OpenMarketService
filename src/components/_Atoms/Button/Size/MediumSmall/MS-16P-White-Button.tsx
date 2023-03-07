import styled from 'styled-components';
import { MediumSmallButtonCS_16p } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface MediumSmallWhiteButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MediumSmallWhiteButton = ({ text, width }: MediumSmallWhiteButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(MediumSmallButtonCS_16p)`
  border: 1px solid #c4c4c4;
  color: #767676;
  background-color: white;
  &:hover {
    border: 1px solid #767676;
    color: black;
  }
`;

export default MediumSmallWhiteButton;
