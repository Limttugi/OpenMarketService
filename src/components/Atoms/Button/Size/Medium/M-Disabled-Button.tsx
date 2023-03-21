import { CSS_I } from 'global_type_interface';
import styled from 'styled-components';
import { MediumButtonCS } from '.';

interface MDisabledButton_I extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: () => void;
}

const MDisabledButton = ({ text, width, onClickEvent }: MDisabledButton_I) => {
  return (
    <Button width={width} onClick={onClickEvent}>
      {text}
    </Button>
  );
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: #c4c4c4;
`;

export default MDisabledButton;
