import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { ErrorMessage, SignUp_InputProps_I } from './common';

const SignUpInputPassword = ({
  thisRef,
  value,
  setValue,
  onBlurEvent,
  validationMessageOrPass,
}: SignUp_InputProps_I) => {
  return (
    <fieldset>
      <TextInputBox
        thisRef={thisRef}
        typeText='비밀번호'
        value={value}
        setValue={setValue}
        onBlurEvent={onBlurEvent}
        width='48rem'
        type='password'
        validation={validationMessageOrPass === true || validationMessageOrPass === ''}
      />
      <ErrorMessage validation={validationMessageOrPass === true || validationMessageOrPass === ''}>
        {validationMessageOrPass !== '' && validationMessageOrPass}
      </ErrorMessage>
    </fieldset>
  );
};

export default SignUpInputPassword;
