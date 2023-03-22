import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { ErrorMessage, SignUp_InputProps_I } from './common';

const SignUpInputPasswordCheck = ({
  thisRef,
  value,
  setValue,
  onBlurEvent,
  validationMessage,
}: SignUp_InputProps_I) => {
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

export default SignUpInputPasswordCheck;
