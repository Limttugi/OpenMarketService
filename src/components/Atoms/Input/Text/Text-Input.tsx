import styled from 'styled-components';
import { Dispatch } from 'react';

import { mainColor } from 'styles/global';
import { TextInputCS } from './TextInput';
import { CSS_I } from 'global_type_interface';

type CSS_T = Pick<CSS_I, 'width' | 'margin'>;

interface TextInput_I extends CSS_T {
  id: string;
  value: string | number | undefined;
  setValue: Dispatch<any>;
  myInputRef?: React.MutableRefObject<HTMLInputElement>;
  type: string;
  placeholder: string;
}

const TextInput = ({ myInputRef, value, setValue, id, width, type, placeholder, margin }: TextInput_I) => {
  return (
    <Input
      ref={myInputRef}
      id={id}
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      width={width}
      type={type}
      color={mainColor}
      margin={margin}
      autoComplete='off'
    />
  );
};

const Input = styled(TextInputCS).attrs(props => ({ type: props.type }))<{ margin?: string }>`
  border: none;
  width: ${props => props.width};
  height: 6rem;
  border-bottom: 1px solid #c4c4c4;
  margin: ${props => props.margin};
  &:focus {
    border-bottom: 1px solid ${mainColor};
  }
`;

export default TextInput;
