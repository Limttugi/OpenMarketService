import { useState } from 'react';

import { checkDuplicateID } from 'apis/accounts';
import {
  ERROR_DOMAIN_NAME_MESSAGE,
  ERROR_EMAIL_DOMAIN_MESSAGE,
  ERROR_EMAIL_ID_MESSAGE,
  ERROR_ID_MESSAGE,
  ERROR_PASSWORD_CHECK_MESSAGE,
  ERROR_PASSWORD_MESSAGE,
  ERROR_PHONE_NUMBER_MESSAGE,
  ERROR_REQUIRED_INFO_MESSAGE,
} from 'constants/ERROR_MESSAGE';
import { DOMAIN_REG_EXP, EMAIL_ID_REG_EXP, ID_REG_EXP, PASSWORD_REG_EXP } from 'constants/REGULAR_EXPRESSION';

interface validationMessageOrPass_I {
  id: string | true;
  pw: string | true;
  pwCheck: string | true;
  name: string | true;
  phoneNumber: string | true;
  email: string | true;
  registerationNumber: string | true;
  storeName: string | true;
}

const useSignUpInputCheck = () => {
  const [validationMessageOrPass, setValidationMessageOrPass] = useState<validationMessageOrPass_I>({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    phoneNumber: '',
    email: '',
    registerationNumber: '',
    storeName: '',
  });

  const handleSetErrorMessage = (array: Array<string>) => {
    const { id, pw, pwCheck, name, phoneNumber, email, registerationNumber } = validationMessageOrPass;
    const ArrayLength = array.length;

    if (ArrayLength === 1) {
      if (id === '') validationMessageOrPass.id = ERROR_REQUIRED_INFO_MESSAGE;
    } else if (ArrayLength === 2) {
      if (id === '') validationMessageOrPass.id = ERROR_REQUIRED_INFO_MESSAGE;
      if (pw === '') validationMessageOrPass.pw = ERROR_REQUIRED_INFO_MESSAGE;
    } else if (ArrayLength === 3) {
      if (id === '') validationMessageOrPass.id = ERROR_REQUIRED_INFO_MESSAGE;
      if (pw === '') validationMessageOrPass.pw = ERROR_REQUIRED_INFO_MESSAGE;
      if (pwCheck === '') validationMessageOrPass.pwCheck = ERROR_REQUIRED_INFO_MESSAGE;
    } else if (ArrayLength === 4) {
      if (id === '') validationMessageOrPass.id = ERROR_REQUIRED_INFO_MESSAGE;
      if (pw === '') validationMessageOrPass.pw = ERROR_REQUIRED_INFO_MESSAGE;
      if (pwCheck === '') validationMessageOrPass.pwCheck = ERROR_REQUIRED_INFO_MESSAGE;
      if (name === '') validationMessageOrPass.name = ERROR_REQUIRED_INFO_MESSAGE;
    } else if (ArrayLength === 5) {
      if (id === '') validationMessageOrPass.id = ERROR_REQUIRED_INFO_MESSAGE;
      if (pw === '') validationMessageOrPass.pw = ERROR_REQUIRED_INFO_MESSAGE;
      if (pwCheck === '') validationMessageOrPass.pwCheck = ERROR_REQUIRED_INFO_MESSAGE;
      if (name === '') validationMessageOrPass.name = ERROR_REQUIRED_INFO_MESSAGE;
      if (phoneNumber === '') validationMessageOrPass.phoneNumber = ERROR_REQUIRED_INFO_MESSAGE;
    } else if (ArrayLength === 6) {
      if (id === '') validationMessageOrPass.id = ERROR_REQUIRED_INFO_MESSAGE;
      if (pw === '') validationMessageOrPass.pw = ERROR_REQUIRED_INFO_MESSAGE;
      if (pwCheck === '') validationMessageOrPass.pwCheck = ERROR_REQUIRED_INFO_MESSAGE;
      if (name === '') validationMessageOrPass.name = ERROR_REQUIRED_INFO_MESSAGE;
      if (phoneNumber === '') validationMessageOrPass.phoneNumber = ERROR_REQUIRED_INFO_MESSAGE;
      if (email === '') validationMessageOrPass.email = ERROR_REQUIRED_INFO_MESSAGE;
      console.log(validationMessageOrPass);
    } else if (ArrayLength === 7) {
      if (id === '') validationMessageOrPass.id = ERROR_REQUIRED_INFO_MESSAGE;
      if (pw === '') validationMessageOrPass.pw = ERROR_REQUIRED_INFO_MESSAGE;
      if (pwCheck === '') validationMessageOrPass.pwCheck = ERROR_REQUIRED_INFO_MESSAGE;
      if (name === '') validationMessageOrPass.name = ERROR_REQUIRED_INFO_MESSAGE;
      if (phoneNumber === '') validationMessageOrPass.phoneNumber = ERROR_REQUIRED_INFO_MESSAGE;
      if (email === '') validationMessageOrPass.email = ERROR_REQUIRED_INFO_MESSAGE;
      if (registerationNumber === '') validationMessageOrPass.registerationNumber = ERROR_REQUIRED_INFO_MESSAGE;
    }
  };

  const handleCheckValidationID = (username: string) => {
    if (ID_REG_EXP.test(username)) {
      checkDuplicateID({ username })
        .then(res => setValidationMessageOrPass({ ...validationMessageOrPass, id: res.data.Success }))
        .catch(err => setValidationMessageOrPass({ ...validationMessageOrPass, id: err.response.data.FAIL_Message }));
    } //
    else {
      if (username === '') setValidationMessageOrPass({ ...validationMessageOrPass, id: ERROR_REQUIRED_INFO_MESSAGE });
      else setValidationMessageOrPass({ ...validationMessageOrPass, id: ERROR_ID_MESSAGE });
    }
  };

  const handleCheckValidationPW = (password: string) => {
    handleSetErrorMessage(['id']);

    if (PASSWORD_REG_EXP.test(password)) setValidationMessageOrPass({ ...validationMessageOrPass, pw: true });
    else {
      if (password === '') setValidationMessageOrPass({ ...validationMessageOrPass, pw: ERROR_REQUIRED_INFO_MESSAGE });
      else setValidationMessageOrPass({ ...validationMessageOrPass, pw: ERROR_PASSWORD_MESSAGE });
    }
  };

  const handleCheckSamePW = ({ password, passwordCheck }: { password: string; passwordCheck: string }) => {
    handleSetErrorMessage(['id', 'pw']);

    if (password === passwordCheck) {
      setValidationMessageOrPass({ ...validationMessageOrPass, pwCheck: true });
    } //
    else setValidationMessageOrPass({ ...validationMessageOrPass, pwCheck: ERROR_PASSWORD_CHECK_MESSAGE });

    if (validationMessageOrPass.id === '')
      setValidationMessageOrPass({ ...validationMessageOrPass, id: ERROR_REQUIRED_INFO_MESSAGE });
    if (password === '') setValidationMessageOrPass({ ...validationMessageOrPass, pw: ERROR_REQUIRED_INFO_MESSAGE });
    if (passwordCheck === '')
      setValidationMessageOrPass({ ...validationMessageOrPass, pwCheck: ERROR_REQUIRED_INFO_MESSAGE });
  };

  const handleCheckName = (name: string) => {
    handleSetErrorMessage(['id', 'pw', 'pwCheck']);

    if (name === '') setValidationMessageOrPass({ ...validationMessageOrPass, name: ERROR_REQUIRED_INFO_MESSAGE });
    else setValidationMessageOrPass({ ...validationMessageOrPass, name: true });
  };

  const handleCheckPhoneNumber = ({
    exchangeNumber,
    subscriberNumber,
  }: {
    exchangeNumber: string;
    subscriberNumber: string;
  }) => {
    const phoneNumberLength = exchangeNumber.length + subscriberNumber.length;

    handleSetErrorMessage(['id', 'pw', 'pwCheck', 'name']);

    if (phoneNumberLength === 0)
      setValidationMessageOrPass({ ...validationMessageOrPass, phoneNumber: ERROR_REQUIRED_INFO_MESSAGE });
    else if (phoneNumberLength === 7 || phoneNumberLength === 8)
      setValidationMessageOrPass({ ...validationMessageOrPass, phoneNumber: true });
    else setValidationMessageOrPass({ ...validationMessageOrPass, phoneNumber: ERROR_PHONE_NUMBER_MESSAGE });
  };

  const handleCheckEmail = ({ emailId, domainName }: { emailId: string; domainName: string }) => {
    const validEmail = EMAIL_ID_REG_EXP.test(emailId);
    const validDomain = DOMAIN_REG_EXP.test(domainName);

    handleSetErrorMessage(['id', 'pw', 'pwCheck', 'name', 'phoneNumber']);

    if (emailId === '' || domainName === '')
      setValidationMessageOrPass({ ...validationMessageOrPass, email: ERROR_REQUIRED_INFO_MESSAGE });
    else {
      if (validEmail && validDomain) setValidationMessageOrPass({ ...validationMessageOrPass, email: true });
      else if (validEmail && !validDomain)
        setValidationMessageOrPass({ ...validationMessageOrPass, email: ERROR_DOMAIN_NAME_MESSAGE });
      else if (!validEmail && validDomain)
        setValidationMessageOrPass({ ...validationMessageOrPass, email: ERROR_EMAIL_ID_MESSAGE });
      else setValidationMessageOrPass({ ...validationMessageOrPass, email: ERROR_EMAIL_DOMAIN_MESSAGE });
    }
  };

  const handleCheckValidationRegistrationNumber = (registerationNumber: string) => {
    handleSetErrorMessage(['id', 'pw', 'pwCheck', 'name', 'phoneNumber', 'email']);

    if (registerationNumber === '')
      setValidationMessageOrPass({ ...validationMessageOrPass, registerationNumber: ERROR_REQUIRED_INFO_MESSAGE });
    else setValidationMessageOrPass({ ...validationMessageOrPass, registerationNumber: true });
    console.log(validationMessageOrPass.registerationNumber);
  };

  const handleCheckStoreName = (storeName: string) => {
    handleSetErrorMessage(['id', 'pw', 'pwCheck', 'name', 'phoneNumber', 'email', 'registerationNumber']);

    if (storeName === '')
      setValidationMessageOrPass({ ...validationMessageOrPass, storeName: ERROR_REQUIRED_INFO_MESSAGE });
    else setValidationMessageOrPass({ ...validationMessageOrPass, storeName: '' });
  };

  return {
    validationMessageOrPass,
    setValidationMessageOrPass,

    handleCheckValidationID,
    handleCheckValidationPW,
    handleCheckSamePW,
    handleCheckName,
    handleCheckPhoneNumber,
    handleCheckEmail,
    handleCheckValidationRegistrationNumber,
    handleCheckStoreName,
  };
};

export default useSignUpInputCheck;
