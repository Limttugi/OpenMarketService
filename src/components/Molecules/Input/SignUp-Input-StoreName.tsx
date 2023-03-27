import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { ErrorMessage, SignUp_InputProps_I } from './common';

const SignUpInputStoreName = ({
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
        typeText='스토어 이름'
        value={value}
        setValue={setValue}
        onBlurEvent={onBlurEvent}
        width='48rem'
        type='text'
        validation={validationMessageOrPass === true || validationMessageOrPass === ''}
      />
      <ErrorMessage validation={validationMessageOrPass === true || validationMessageOrPass === ''}>
        {validationMessageOrPass !== '' && validationMessageOrPass}
      </ErrorMessage>
    </fieldset>
  );
};

export default SignUpInputStoreName;
