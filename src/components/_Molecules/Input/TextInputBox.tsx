import { InputBoxCS, InputLabel } from 'components/_Atoms/Input/_InputCommonStyle';
import { Dispatch } from 'react';
import styled from 'styled-components';
import { mainColor } from 'styles/global';

interface TextInputBoxI {
  value: string;
  setValue: Dispatch<any>;
  width: string;
  validation?: boolean;
  type: string;
  typeText: string;
  placeholder?: string;
  children?: React.ReactNode;
}

const TextInputBox = ({ value, setValue, width, type, typeText, placeholder, validation, children }: TextInputBoxI) => {
  return (
    <InputLabel>
      <div>{typeText}</div>
      <InputBox
        value={value}
        onChange={setValue}
        width={width}
        type={type}
        placeholder={placeholder}
        validation={validation}
        autoComplete='off'
      ></InputBox>
      {children}
    </InputLabel>
  );
};

const TextInputCheckBox = ({ width, type, typeText, placeholder, validation, value, setValue }: TextInputBoxI) => {
  return (
    <Label>
      {typeText}
      <InputBox
        width={width}
        value={value}
        onChange={setValue}
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

export const InputBox = styled(InputBoxCS).attrs(props => ({ type: props.type }))<{
  onChange?: any;
  validation?: boolean;
}>`
  width: ${props => props.width};
  border: 1px solid ${props => (props.validation === false ? '#eb5757' : '#c4c4c4')};
  &:focus {
    border: 1px solid ${mainColor};
  }
`;

const ValidationText = styled.p<{ validation?: boolean }>`
  margin-top: 1rem;
  color: #eb5757;
  color: ${props => (props.validation ? mainColor : '#eb5757')};
`;
