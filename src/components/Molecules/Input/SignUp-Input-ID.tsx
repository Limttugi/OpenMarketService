import { Dispatch } from 'react';

import { MediumSmallButton16P } from 'components/Atoms/Button/Size/MediumSmall/MS-Button';
import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { Ref_T } from 'global_type_interface';
import { ErrorMessage } from './common';

interface SignUpInputID_I {
  thisRef?: Ref_T;
  value: string;
  setValue: Dispatch<any>;
  onClickEvent?: () => void;
  onBlurEvent?: () => void;
  validationMessage: string | undefined;
}

const SignUpInputID = ({ thisRef, value, setValue, onClickEvent, onBlurEvent, validationMessage }: SignUpInputID_I) => {
  return (
    <>
      <TextInputBox
        thisRef={thisRef}
        value={value}
        setValue={setValue}
        width='34.6rem'
        type='text'
        typeText='아이디'
        validation={validationMessage === undefined || validationMessage === '멋진 아이디네요 :)'}
        onBlurEvent={onBlurEvent}
      >
        <MediumSmallButton16P width='12.2rem' text='중복확인' margin='0 0 0 1rem' onClickEvent={onClickEvent} />
      </TextInputBox>
      <ErrorMessage validation={validationMessage === '멋진 아이디네요 :)'}>
        {validationMessage !== undefined && validationMessage}
      </ErrorMessage>
    </>
  );
};

export default SignUpInputID;
