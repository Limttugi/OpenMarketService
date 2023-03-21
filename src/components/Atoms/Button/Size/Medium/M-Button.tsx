import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { mainColor } from 'styles/global';
import { MediumButtonCS } from '.';

interface MButton_I extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: () => void;
}

const MButton = ({ text, width, onClickEvent }: MButton_I) => {
  return (
    <Button width={width} onClick={onClickEvent}>
      {text}
    </Button>
  );
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: ${mainColor};
`;

export default MButton;
