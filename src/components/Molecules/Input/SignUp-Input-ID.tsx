import { MediumSmallButton16P } from 'components/Atoms/Button/Size/MediumSmall/MS-Button';
import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { ErrorMessage, SignUp_InputProps_I } from './common';

interface SignUpInputID_I extends SignUp_InputProps_I {
  onClickEvent?: () => void;
}

const SignUpInputID = ({
  thisRef,
  value,
  setValue,
  onClickEvent,
  onBlurEvent,
  validationMessageOrPass,
}: SignUpInputID_I) => {
  return (
    <fieldset>
      <TextInputBox
        thisRef={thisRef}
        value={value}
        setValue={setValue}
        width='34.6rem'
        type='text'
        typeText='아이디'
        validation={validationMessageOrPass === '' || validationMessageOrPass === '멋진 아이디네요 :)'}
        onBlurEvent={onBlurEvent}
      >
        <MediumSmallButton16P width='12.2rem' text='중복확인' margin='0 0 0 1rem' onClickEvent={onClickEvent} />
      </TextInputBox>
      <ErrorMessage validation={validationMessageOrPass === '멋진 아이디네요 :)'}>
        {validationMessageOrPass !== '' && validationMessageOrPass}
      </ErrorMessage>
    </fieldset>
  );
};

export default SignUpInputID;
