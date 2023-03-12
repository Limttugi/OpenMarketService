import styled from 'styled-components';
import { MediumSmallButtonCS_16p, MediumSmallButtonCS_18p } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface MediumSmallWhiteButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

export const MediumSmallWhiteButton16P = ({ text, width }: MediumSmallWhiteButtonI) => {
  return <Button16P width={width}>{text}</Button16P>;
};

export const MediumSmallWhiteButton18P = ({ text, width }: MediumSmallWhiteButtonI) => {
  return <Button18P width={width}>{text}</Button18P>;
};

const Button16P = styled(MediumSmallButtonCS_16p)`
  border: 1px solid #c4c4c4;
  color: #767676;
  background-color: white;
  &:hover {
    border: 1px solid #767676;
    color: black;
  }
`;

const Button18P = styled(MediumSmallButtonCS_18p)`
  border: 1px solid #c4c4c4;
  color: #767676;
  background-color: white;
  &:hover {
    border: 1px solid #767676;
    color: black;
  }
`;
