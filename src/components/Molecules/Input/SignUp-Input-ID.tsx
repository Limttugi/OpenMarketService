import { Dispatch } from 'react';

import { MediumSmallButton16P } from 'components/Atoms/Button/Size/MediumSmall/MS-Button';
import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { Ref_T } from 'global_type_interface';

interface SignUpInputID_I {
  thisRef?: Ref_T;
  value: string;
  setValue: Dispatch<any>;
  onClickEvent?: () => void;
  onBlurEvent?: () => void;
  validation?: boolean;
}

const SignUpInputID = ({ thisRef, value, setValue, onClickEvent, onBlurEvent, validation }: SignUpInputID_I) => {
  return (
    <TextInputBox
      thisRef={thisRef}
      value={value}
      setValue={setValue}
      width='34.6rem'
      type='text'
      typeText='아이디'
      validation={validation && validation}
      onBlurEvent={onBlurEvent}
    >
      <MediumSmallButton16P width='12.2rem' text='중복확인' margin='0 0 0 1rem' onClickEvent={onClickEvent} />
    </TextInputBox>
  );
};

export default SignUpInputID;
