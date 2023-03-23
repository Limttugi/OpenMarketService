import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { ErrorMessage, SignUp_InputProps_I } from './common';

const SignUpInputName = ({ thisRef, value, setValue, onBlurEvent, validationMessageOrPass }: SignUp_InputProps_I) => {
  return (
    <fieldset>
      <TextInputBox
        typeText='이름'
        thisRef={thisRef}
        value={value}
        setValue={setValue}
        width='48rem'
        type='text'
        onBlurEvent={onBlurEvent}
        validation={validationMessageOrPass === true || validationMessageOrPass === ''}
      />
      <ErrorMessage validation={validationMessageOrPass === true || validationMessageOrPass === ''}>
        {validationMessageOrPass !== '' && validationMessageOrPass}
      </ErrorMessage>
    </fieldset>
  );
};

export default SignUpInputName;
