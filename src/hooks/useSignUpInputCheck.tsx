import { useState } from 'react';

import { checkDuplicateID } from 'apis/accounts';

const useSignUpInputCheck = () => {
  const [validationMessageID, setValidationMessageID] = useState<string>();
  const [validationMessagePW, setValidationMessagePW] = useState<string>();
  const [validationMessageName, setValidationMessageName] = useState<string>();
  const [validationMessagePhoneNumber, setValidationMessagePhoneNumber] = useState<string>();
  const [validationMessageEmail, setValidationMessageEmail] = useState<string>();

  const handleCheckValidationID = (username: string) => {
    const ID_VALIDATION = /^[a-zA-Z0-9]+$/.test(username);

    if (ID_VALIDATION) {
      checkDuplicateID({ username })
        .then(res => setValidationMessageID(res.data.Success))
        .catch(err => setValidationMessageID(err.response.data.FAIL_Message));
    } //
    else {
      if (username === '') setValidationMessageID('필수 정보입니다.');
      else setValidationMessageID('20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.');
    }
  };

  const handleCheckValidationPW = (password: string) => {
    console.log(password);
    const PW_VALIDATION = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=\\[\]{};':"\\|,.<>\\/?]).{8,}$/.test(
      password,
    );

    if (PW_VALIDATION) setValidationMessagePW('');
    else {
      if (password === '') setValidationMessagePW('필수 정보입니다.');
      else setValidationMessagePW('8자이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
    }

    if (validationMessageID === undefined) setValidationMessageID('필수 정보입니다.');
  };

  const handleCheckSamePW = ({ password, passwordCheck }: { password: string; passwordCheck: string }) => {};

  return {
    validationMessageID,
    setValidationMessageID,
    validationMessagePW,
    setValidationMessagePW,

    handleCheckValidationID,
    handleCheckValidationPW,
    handleCheckSamePW,
  };
};

export default useSignUpInputCheck;
