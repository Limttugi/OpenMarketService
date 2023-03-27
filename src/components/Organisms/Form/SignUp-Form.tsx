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
import LoginTypeButtonWrapper from 'components/Molecules/Wrapper/LoginType-Button-Wrapper';
import { createAccountBuyer, createAccountSeller } from 'apis/accounts';
import { useInput } from 'hooks/useInput';
import useSignUpInputCheck from 'hooks/useSignUpInputCheck';
import { ERROR_INVALID_EMAIL_FORMAT_MESSAGE, ERROR_PHONE_NUMBER_EXIST_MESSAGE } from 'constants/ERROR_MESSAGE';
import { useRecoilValue } from 'recoil';
import { LoginType } from 'recoil/atoms/member';
import SignUpInputRegistrationNumber from 'components/Molecules/Input/SignUp-Input-Registration-Number';
import SignUpInputStoreName from 'components/Molecules/Input/SignUp-Input-StoreName';

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
    handleCheckValidationRegistrationNumber,
    handleCheckStoreName,
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
  const [registrationNumber, handleSetRegistrationNumber] = useInput('');
  const [storeName, handleSetStoreName] = useInput('');

  const loginType = useRecoilValue(LoginType);

  const BUYER_VALIDATION =
    checked &&
    validationMessageOrPass.id === '멋진 아이디네요 :)' &&
    validationMessageOrPass.pw === true &&
    validationMessageOrPass.pwCheck === true &&
    validationMessageOrPass.name === true &&
    validationMessageOrPass.phoneNumber === true &&
    validationMessageOrPass.email === true;

  const SELLER_SIGNUP_VALIDATION =
    checked &&
    validationMessageOrPass.id === '멋진 아이디네요 :)' &&
    validationMessageOrPass.pw === true &&
    validationMessageOrPass.pwCheck === true &&
    validationMessageOrPass.name === true &&
    validationMessageOrPass.phoneNumber === true &&
    validationMessageOrPass.email === true &&
    validationMessageOrPass.registerationNumber === true &&
    validationMessageOrPass.storeName === true;

  const handleSetErrorResponseMessage = ({ error, errorMessage }: { error: string; errorMessage?: string }) => {
    if (error === 'phone_number') {
      setValidationMessageOrPass({ ...validationMessageOrPass, phoneNumber: ERROR_PHONE_NUMBER_EXIST_MESSAGE });
      setExchangeNumber('');
      setSubScriberNumber('');
    }

    if (error === 'email') {
      if (errorMessage === ERROR_INVALID_EMAIL_FORMAT_MESSAGE)
        setValidationMessageOrPass({ ...validationMessageOrPass, email: ERROR_INVALID_EMAIL_FORMAT_MESSAGE });
      setEmailId('');
      setDomainName('');
    }
  };

  const handleSignUp = () => {
    const phone_number = areaCode + exchangeNumber + subscriberNumber;
    const createAccountBuyerData = { username: id, password, password2: passwordCheck, phone_number, name };
    const createAccountSellerData = {
      username: id,
      password,
      password2: passwordCheck,
      phone_number,
      name,
      company_registration_number: registrationNumber,
      store_name: storeName,
    };

    if (loginType === 'BUYER') {
      createAccountBuyer(createAccountBuyerData)
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
    } //
    else if (loginType === 'SELLER') {
      createAccountSeller(createAccountSellerData)
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }
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
        {loginType === 'SELLER' && (
          <>
            <SignUpInputRegistrationNumber
              value={registrationNumber}
              setValue={handleSetRegistrationNumber}
              onBlurEvent={() => handleCheckValidationRegistrationNumber(registrationNumber)}
              validationMessageOrPass={validationMessageOrPass.registerationNumber}
            />
            <SignUpInputStoreName
              value={storeName}
              setValue={handleSetStoreName}
              onBlurEvent={() => handleCheckStoreName(storeName)}
              validationMessageOrPass={validationMessageOrPass.storeName}
            />
          </>
        )}
      </SignForm>

      <CheckLabel>
        <CheckBox checked={checked} onClick={() => setChecked(!checked)} readOnly />
        <CheckText>
          호두샵의&nbsp;<HyperLink to=''>이용약관</HyperLink>&nbsp;및&nbsp;
          <HyperLink to=''>개인정보처리방침</HyperLink>에 대한 내용을 확인하였고 동의합니다.
        </CheckText>
      </CheckLabel>

      {BUYER_VALIDATION || SELLER_SIGNUP_VALIDATION ? (
        <MButton width='48rem' text='가입하기' onClickEvent={handleSignUp} />
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
