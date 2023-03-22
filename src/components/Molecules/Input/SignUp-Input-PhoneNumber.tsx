import { Dispatch } from 'react';

import PhoneNumberAreaCodeInput, { PhoneNumberInput } from 'components/Atoms/Input/PhoneNumberAreaCode-Input';
import { TextInputLabel } from 'components/Atoms/Input/Text/TextInput';

interface SignUpInputPhoneNumber_I {
  areaCode: number;
  exchageNumber: number;
  subscriberNumber: number;
  handleSetAreaCode: Dispatch<number>;
  handleSetExchageNumber: Dispatch<number>;
  handleSetSubscriberNumber: Dispatch<number>;
  validation?: boolean;
}

const SignUpInputPhoneNumber = ({
  areaCode,
  exchageNumber,
  subscriberNumber,
  handleSetAreaCode,
  handleSetExchageNumber,
  handleSetSubscriberNumber,
}: SignUpInputPhoneNumber_I) => {
  return (
    <TextInputLabel>
      <div>휴대폰번호</div>
      <PhoneNumberAreaCodeInput areaCode={areaCode} handleSetAreaCode={handleSetAreaCode} />
      <PhoneNumberInput value={exchageNumber} onChange={handleSetExchageNumber} />
      <PhoneNumberInput value={subscriberNumber} onChange={handleSetSubscriberNumber} />
    </TextInputLabel>
  );
};

export default SignUpInputPhoneNumber;
