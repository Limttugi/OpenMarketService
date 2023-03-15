import { InputLabel } from '../../_Atoms/Input/_InputCommonStyle';
import PhoneNumberAreaCodeInput, { PhoneNumberInput } from '../../_Atoms/Input/PhoneNumberAreaCodeInput';
import { Dispatch } from 'react';

interface SignUpPhoneNumberInputI {
  areaCode: number;
  exchageNumber: number;
  subscriberNumber: number;
  handleSetAreaCode: Dispatch<number>;
  handleSetExchageNumber: Dispatch<number>;
  handleSetSubscriberNumber: Dispatch<number>;
}

const SignUpPhoneNumberInput = ({
  areaCode,
  exchageNumber,
  subscriberNumber,
  handleSetAreaCode,
  handleSetExchageNumber,
  handleSetSubscriberNumber,
}: SignUpPhoneNumberInputI) => {
  return (
    <InputLabel>
      <div>휴대폰번호</div>
      <PhoneNumberAreaCodeInput areaCode={areaCode} handleSetAreaCode={handleSetAreaCode} />
      <PhoneNumberInput value={exchageNumber} onChange={handleSetExchageNumber} />
      <PhoneNumberInput value={subscriberNumber} onChange={handleSetSubscriberNumber} />
    </InputLabel>
  );
};

export default SignUpPhoneNumberInput;
