import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { mainColor } from 'styles/global';
import { LargeButtonCS } from '.';

interface LButtonI extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const LButton = ({ text, width }: LButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(LargeButtonCS)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;

export default LButton;
