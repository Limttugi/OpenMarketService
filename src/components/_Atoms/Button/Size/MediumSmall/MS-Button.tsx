import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { MediumSmallButtonCS_16p, MediumSmallButtonCS_18p } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface MediumSmallButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: () => void;
}

export const MediumSmallButton16P = ({ text, width, onClickEvent }: MediumSmallButtonI) => {
  return <Button16P width={width}>{text}</Button16P>;
};

export const MediumSmallButton18P = ({ text, width, onClickEvent }: MediumSmallButtonI) => {
  return <Button18P width={width}>{text}</Button18P>;
};

const Button16P = styled(MediumSmallButtonCS_16p)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;

const Button18P = styled(MediumSmallButtonCS_18p)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;
