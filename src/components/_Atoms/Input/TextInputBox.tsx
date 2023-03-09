import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { InputLabel, InputBoxCS } from './_InputCommonStyle';

interface TextInputBoxI {
  id: string;
  width: string;
  validation: boolean;
  type: string;
  typeText: string;
  placeholder: string;
}

const TextInputBox = ({ id, width, type, typeText, placeholder, validation }: TextInputBoxI) => {
  const { value, handleSetValue } = useInput('');

  return (
    <InputLabel width={width}>
      {typeText}
      <Input
        id={id}
        value={value}
        onChange={handleSetValue}
        type={type}
        placeholder={placeholder}
        validation={validation}
      />
    </InputLabel>
  );
};

const TextInputCheckBox = ({ id, width, type, typeText, placeholder, validation }: TextInputBoxI) => {
  const { value, handleSetValue } = useInput('');

  return (
    <Label width={width}>
      {typeText}
      <Input
        id={id}
        value={value}
        onChange={handleSetValue}
        type={type}
        placeholder={placeholder}
        validation={validation}
      />
      {typeText === '아이디' && (
        <ValidationText validation={validation}>
          {validation ? '사용 가능한 아이디입니다.' : '이미 사용중인 아이디입니다.'}
        </ValidationText>
      )}
    </Label>
  );
};

export { TextInputBox, TextInputCheckBox };

const Label = styled(InputLabel)`
  height: 11.4rem;
`;

const Input = styled(InputBoxCS).attrs(props => ({ type: props.type }))<{ validation: boolean }>`
  border: 1px solid ${props => (props.validation ? '#c4c4c4' : '#eb5757')};
  &:focus {
    border: 1px solid ${mainColor};
  }
`;

const ValidationText = styled.p<{ validation: boolean }>`
  margin-top: 1rem;
  color: #eb5757;
  color: ${props => (props.validation ? mainColor : '#eb5757')};
`;
