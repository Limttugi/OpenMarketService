import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { mainColor } from 'styles/global';
import { SmallButtonCS } from '.';

interface SmallButton_I extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const SmallButton = ({ text, width }: SmallButton_I) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(SmallButtonCS)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;

export default SmallButton;
