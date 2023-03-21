import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';
import { MediumButtonCS } from '.';

interface MDarkButton_I extends Pick<CSS_I, 'width'> {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const MDarkButton = ({ text, width }: MDarkButton_I) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(MediumButtonCS)`
  border: none;
  color: white;
  background-color: #767676;
`;

export default MDarkButton;
