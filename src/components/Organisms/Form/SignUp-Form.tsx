import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { SignForm } from './SignCommon';
import MButton from 'components/Atoms/Button/Size/Medium/M-Button';
import MDisabledButton from 'components/Atoms/Button/Size/Medium/M-Disabled-Button';
import SignUpInputID from 'components/Molecules/Input/SignUp-Input-ID';
import SignUpInputPassword from 'components/Molecules/Input/SignUp-Input-Password';
import SignUpInputPasswordCheck from 'components/Molecules/Input/SignUp-Input-PasswordCheck';
import SignUpInputName from 'components/Molecules/Input/SignUp-Input-Name';
import SignUpInputEmail from 'components/Molecules/Input/SignUp-Input-Email';
import SignUpInputPhoneNumber from 'components/Molecules/Input/SignUp-Input-PhoneNumber';
import LoginTypeButtonWrapper from 'components/Molecules/Wrapper/LoginTypeButtonWrapper';
import { createAccountBuyer } from 'apis/accounts';
import { useInput } from 'hooks/useInput';
import useSignUpInputCheck from 'hooks/useSignUpInputCheck';
import {
  ERROR_EXSIST_EMAIL_MESSAGE,
  ERROR_INVALID_EMAIL_FORMAT_MESSAGE,
  ERROR_PHONE_NUMBER_EXIST_MESSAGE,
} from 'constants/ERROR_MESSAGE';

const SignUpForm = () => {
  const {
    validationMessageOrPass,
    setValidationMessageOrPass,

    handleCheckValidationID,
    handleCheckValidationPW,
    handleCheckSamePW,
    handleCheckName,
    handleCheckPhoneNumber,
    handleCheckEmail,
  } = useSignUpInputCheck();

  const navigate = useNavigate();

  const [id, handleSetId] = useInput('');
  const [password, handleSetPassword] = useInput('');
  const [passwordCheck, handleSetPasswordCheck] = useInput('');
  const [name, handleSetName] = useInput('');
  const [areaCode, , handleSetAreaCode] = useInput('010');
  const [exchangeNumber, handleSetExchangeNumber, setExchangeNumber] = useInput('');
  const [subscriberNumber, handleSetSubscriberNumber, setSubScriberNumber] = useInput('');
  const [emailId, handleSetEmailId, setEmailId] = useInput('');
  const [domainName, handleSetDomainName, setDomainName] = useInput('');

  const [checked, setChecked] = useState(false);

  const handleSetErrorResponseMessage = ({ error, errorMessage }: { error: string; errorMessage?: string }) => {
    if (error === 'phone_number') {
      console.log('phone');
      setValidationMessageOrPass({ ...validationMessageOrPass, phoneNumber: ERROR_PHONE_NUMBER_EXIST_MESSAGE });
      validationMessageOrPass.phoneNumber = ERROR_PHONE_NUMBER_EXIST_MESSAGE;
      setExchangeNumber('');
      setSubScriberNumber('');
    }

    if (error === 'email') {
      if (errorMessage === ERROR_INVALID_EMAIL_FORMAT_MESSAGE)
        setValidationMessageOrPass({ ...validationMessageOrPass, email: ERROR_INVALID_EMAIL_FORMAT_MESSAGE });
      else if (errorMessage === ERROR_EXSIST_EMAIL_MESSAGE)
        setValidationMessageOrPass({ ...validationMessageOrPass, email: ERROR_EXSIST_EMAIL_MESSAGE });
      setEmailId('');
      setDomainName('');
    }
  };

  const handleSignUp_Buyer = () => {
    const phone_number = areaCode + exchangeNumber + subscriberNumber;
    const createAccountData = { username: id, password, password2: passwordCheck, phone_number, name } as any;

    createAccountBuyer(createAccountData)
      .then(res => {
        console.log(res);
        navigate('/signin');
      })
      .catch(err => {
        const RESPONSE_ERROR = err.response.data;

        console.error(RESPONSE_ERROR);
        for (let error in RESPONSE_ERROR) {
          handleSetErrorResponseMessage({ error, errorMessage: RESPONSE_ERROR.error });
        }
      });
  };

  return (
    <>
      <SignForm alignItems='center'>
        <LoginTypeButtonWrapper sign='가입' />

        <InputUserAccountContainer>
          <SignUpInputID
            value={id}
            setValue={handleSetId}
            onClickEvent={() => handleCheckValidationID(id)}
            onBlurEvent={() => handleCheckValidationID(id)}
            validationMessageOrPass={validationMessageOrPass.id}
          />

          <SignUpInputPassword
            value={password}
            setValue={handleSetPassword}
            onBlurEvent={() => handleCheckValidationPW(password)}
            validationMessageOrPass={validationMessageOrPass.pw}
          />

          <SignUpInputPasswordCheck
            value={passwordCheck}
            setValue={handleSetPasswordCheck}
            onBlurEvent={() => handleCheckSamePW({ password, passwordCheck })}
            validationMessageOrPass={validationMessageOrPass.pwCheck}
          />
        </InputUserAccountContainer>

        <InputUserInfoContainer>
          <SignUpInputName
            value={name}
            setValue={handleSetName}
            onBlurEvent={() => handleCheckName(name)}
            validationMessageOrPass={validationMessageOrPass.name}
          />

          <SignUpInputPhoneNumber
            areaCode={areaCode}
            exchangeNumber={exchangeNumber}
            subscriberNumber={subscriberNumber}
            handleSetAreaCode={handleSetAreaCode}
            handleSetExchangeNumber={handleSetExchangeNumber}
            handleSetSubscriberNumber={handleSetSubscriberNumber}
            onBlurEvent={() => handleCheckPhoneNumber({ exchangeNumber, subscriberNumber })}
            validationMessageOrPass={validationMessageOrPass.phoneNumber}
          />

          <SignUpInputEmail
            emailId={emailId}
            domainName={domainName}
            handleSetEmailId={handleSetEmailId}
            handleSetDomainName={handleSetDomainName}
            onBlurEvent={() => handleCheckEmail({ emailId, domainName })}
            validationMessageOrPass={validationMessageOrPass.email}
          />
        </InputUserInfoContainer>
      </SignForm>

      <CheckLabel>
        <CheckBox checked={checked} onClick={() => setChecked(!checked)} readOnly />
        <CheckText>
          호두샵의&nbsp;<HyperLink to=''>이용약관</HyperLink>&nbsp;및&nbsp;
          <HyperLink to=''>개인정보처리방침</HyperLink>에 대한 내용을 확인하였고 동의합니다.
        </CheckText>
      </CheckLabel>

      {checked &&
      validationMessageOrPass.id === '멋진 아이디네요 :)' &&
      validationMessageOrPass.pw === true &&
      validationMessageOrPass.pwCheck === true &&
      validationMessageOrPass.name === true &&
      validationMessageOrPass.phoneNumber === true &&
      validationMessageOrPass.email === true ? (
        <MButton width='48rem' text='가입하기' onClickEvent={handleSignUp_Buyer} />
      ) : (
        <MDisabledButton width='48rem' text='가입하기' />
      )}
    </>
  );
};

export default SignUpForm;

const InputUserAccountContainer = styled.div`
  margin-bottom: 3.8rem;
`;

const InputUserInfoContainer = styled.div``;

const CheckLabel = styled.label`
  height: 4rem;
  display: flex;
  align-items: flex-start;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  color: #767676;
  margin: 3.4rem 0;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 1rem;
  margin-top: 0.4rem;
`;

const CheckText = styled.span`
  width: 45.4rem;
`;

const HyperLink = styled(Link)`
  color: #767676;
  font-weight: bold;
`;
