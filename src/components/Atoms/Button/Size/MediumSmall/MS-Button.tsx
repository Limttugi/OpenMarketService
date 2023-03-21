import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { mainColor } from 'styles/global';
import { MediumSmallButtonCS_16p, MediumSmallButtonCS_18p } from '.';

interface MediumSmallButton_I extends Pick<CSS_I, 'width'> {
  text: string;
  margin?: string;
  onClickEvent?: () => void;
}

export const MediumSmallButton16P = ({ text, width, margin, onClickEvent }: MediumSmallButton_I) => {
  return (
    <Button16P width={width} margin={margin} onClick={onClickEvent}>
      {text}
    </Button16P>
  );
};

export const MediumSmallButton18P = ({ text, width, margin, onClickEvent }: MediumSmallButton_I) => {
  return (
    <Button18P width={width} margin={margin} onClick={onClickEvent}>
      {text}
    </Button18P>
  );
};

const Button16P = styled(MediumSmallButtonCS_16p)<{ margin?: string }>`
  border: none;
  color: white;
  margin: ${props => props.margin};
  background-color: ${mainColor};
`;

const Button18P = styled(MediumSmallButtonCS_18p)<{ margin?: string }>`
  border: none;
  color: white;
  margin: ${props => props.margin};
  background-color: ${mainColor};
`;
