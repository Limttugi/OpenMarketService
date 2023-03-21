import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { MediumButtonCS } from '.';

interface MWhiteButton_I extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MWhiteButton = ({ text, width }: MWhiteButton_I) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(MediumButtonCS)`
  border: 1px solid #c4c4c4;
  color: #767676;
  background-color: white;
`;

export default MWhiteButton;
