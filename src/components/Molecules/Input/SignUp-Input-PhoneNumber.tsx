import { Dispatch } from 'react';

import PhoneNumberAreaCodeInput, { PhoneNumberInput } from 'components/Atoms/Input/PhoneNumberAreaCode-Input';
import { TextInputLabel } from 'components/Atoms/Input/Text/TextInput';
import { ErrorMessage, SignUp_InputProps_I } from './common';

interface SignUpInputPhoneNumber_I extends Pick<SignUp_InputProps_I, 'validationMessageOrPass' | 'onBlurEvent'> {
  areaCode: number;
  exchangeNumber: number;
  subscriberNumber: number;
  handleSetAreaCode: Dispatch<number>;
  handleSetExchangeNumber: Dispatch<number>;
  handleSetSubscriberNumber: Dispatch<number>;
}

const SignUpInputPhoneNumber = (phoneNumberInfo: SignUpInputPhoneNumber_I) => {
  const {
    areaCode,
    exchangeNumber,
    subscriberNumber,
    handleSetAreaCode,
    handleSetExchangeNumber,
    handleSetSubscriberNumber,
    validationMessageOrPass,
    onBlurEvent,
  } = phoneNumberInfo;

  const maxLengthCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > e.target.maxLength) {
      return (e.target.value = e.target.value.slice(0, e.target.maxLength));
    }
  };

  return (
    <fieldset>
      <TextInputLabel>
        <div>휴대폰번호</div>
        <PhoneNumberAreaCodeInput areaCode={areaCode} handleSetAreaCode={handleSetAreaCode} />
        <PhoneNumberInput
          value={exchangeNumber}
          onChange={handleSetExchangeNumber}
          onBlur={onBlurEvent}
          validation={
            validationMessageOrPass === true || validationMessageOrPass === '' || String(exchangeNumber) !== ''
          }
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => maxLengthCheck(e)}
        />
        <PhoneNumberInput
          value={subscriberNumber}
          onChange={handleSetSubscriberNumber}
          onBlur={onBlurEvent}
          validation={
            validationMessageOrPass === true || validationMessageOrPass === '' || String(subscriberNumber) !== ''
          }
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => maxLengthCheck(e)}
        />
      </TextInputLabel>
      <ErrorMessage validation={validationMessageOrPass === ''}>
        {validationMessageOrPass !== '' && validationMessageOrPass}
      </ErrorMessage>
    </fieldset>
  );
};

export default SignUpInputPhoneNumber;
