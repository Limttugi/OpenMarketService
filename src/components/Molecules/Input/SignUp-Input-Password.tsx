import { Dispatch } from 'react';

import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { Ref_T } from 'global_type_interface';
import { ErrorMessage } from './common';

interface SignUpInputPassword_I {
  thisRef?: Ref_T;
  value: string;
  setValue: Dispatch<any>;
  onBlurEvent?: () => void;
  validationMessage?: any;
}

const SignUpInputPassword = ({ thisRef, value, setValue, onBlurEvent, validationMessage }: SignUpInputPassword_I) => {
  return (
    <>
      <TextInputBox
        thisRef={thisRef}
        typeText='비밀번호'
        value={value}
        setValue={setValue}
        onBlurEvent={onBlurEvent}
        width='48rem'
        type='password'
        validation={validationMessage === undefined}
      />
      <ErrorMessage validation={validationMessage === undefined}>
        {validationMessage !== undefined && validationMessage}
      </ErrorMessage>
    </>
  );
};

export default SignUpInputPassword;
