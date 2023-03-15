import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { InputCS } from './_InputCommonStyle';
import { Dispatch } from 'react';

interface TextInputI {
  myInputRef?: React.MutableRefObject<HTMLInputElement>;
  value: string | number | undefined;
  setValue: Dispatch<any>;
  id: string;
  width: string;
  type: string;
  placeholder: string;
  margin?: string;
}

const TextInput = ({ myInputRef, value, setValue, id, width, type, placeholder, margin }: TextInputI) => {
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
      autoComplete='current-password'
    />
  );
};

const Input = styled(InputCS).attrs(props => ({ type: props.type }))<{ margin?: string }>`
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
