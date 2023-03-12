import styled from 'styled-components';
import { useInput } from 'hooks/useInput';
import { mainColor } from 'styles/global';
import { InputCS } from './_InputCommonStyle';

interface TextInputI {
  id: string;
  width: string;
  type: string;
  placeholder: string;
  margin?: string;
}

const TextInput = ({ id, width, type, placeholder, margin }: TextInputI) => {
  const { value, handleSetValue } = useInput('');

  return (
    <Input
      id={id}
      value={value}
      onChange={handleSetValue}
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
