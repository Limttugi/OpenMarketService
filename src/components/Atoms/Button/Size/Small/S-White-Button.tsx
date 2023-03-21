import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { mainColor } from 'styles/global';
import { SmallButtonCS } from '.';

interface SmallWhiteButtonI extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const SmallWhiteButton = ({ text, width }: SmallWhiteButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(SmallButtonCS)`
  border: 1px solid #c4c4c4;
  color: #767676;
  background-color: ${mainColor};
  &:hover {
    border: 1px solid #767676;
    color: black;
  }
`;

export default SmallWhiteButton;
