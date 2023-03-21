import { mainColor } from 'styles/global';

import { CSS_I, Ref_T } from 'global_type_interface';
import { Dispatch } from 'react';
import styled from 'styled-components';
import { TextInputBoxCS, TextInputLabel } from './TextInput';

type CSS_T = Pick<CSS_I, 'width'>;

interface TextInputBoxI extends CSS_T {
  thisRef?: Ref_T;
  value: string;
  setValue: Dispatch<any>;
  validation?: boolean;
  type: string;
  typeText: string;
  placeholder?: string;
  children?: React.ReactNode;
  onBlurEvent?: () => void;
}

const TextInputBox = ({
  thisRef,
  value,
  setValue,
  width,
  type,
  typeText,
  placeholder,
  validation,
  children,
  onBlurEvent,
}: TextInputBoxI) => {
  return (
    <TextInputLabel>
      <div>{typeText}</div>
      <InputBox
        ref={thisRef}
        value={value}
        onChange={setValue}
        onBlur={onBlurEvent}
        width={width}
        type={type}
        placeholder={placeholder}
        validation={validation}
        autoComplete='off'
      ></InputBox>
      {children}
    </TextInputLabel>
  );
};

const TextInputCheckBox = ({
  thisRef,
  value,
  setValue,
  width,
  type,
  typeText,
  placeholder,
  validation,
  onBlurEvent,
}: TextInputBoxI) => {
  return (
    <Label>
      {typeText}
      <InputBox
        ref={thisRef}
        width={width}
        value={value}
        onChange={setValue}
        onBlur={onBlurEvent}
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

const Label = styled(TextInputLabel)`
  height: 11.4rem;
`;

export const InputBox = styled(TextInputBoxCS).attrs(props => ({ type: props.type }))<{
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
