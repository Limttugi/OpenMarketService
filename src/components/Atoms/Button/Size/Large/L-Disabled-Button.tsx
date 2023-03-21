import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { LargeButtonCS } from '.';

interface LDisabledButton_I extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const LDisabledButton = ({ text, width }: LDisabledButton_I) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(LargeButtonCS)`
  border: none;
  color: white;
  background-color: #c4c4c4;
`;

export default LDisabledButton;
