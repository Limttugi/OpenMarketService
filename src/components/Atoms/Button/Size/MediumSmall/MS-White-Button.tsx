import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { MediumSmallButtonCS_16p, MediumSmallButtonCS_18p } from '.';

interface MediumSmallWhiteButton_I extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

export const MediumSmallWhiteButton16P = ({ text, width }: MediumSmallWhiteButton_I) => {
  return <Button16P width={width}>{text}</Button16P>;
};

export const MediumSmallWhiteButton18P = ({ text, width }: MediumSmallWhiteButton_I) => {
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
