import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import MDisabledButton from 'components/Atoms/Button/Size/Medium/M-Disabled-Button';
import SignUpInputPhoneNumber from 'components/Molecules/Input/SignUp-Input-PhoneNumber';
import SignUpInputID from 'components/Molecules/Input/SignUp-Input-ID';
import SignUpInputEmail from 'components/Molecules/Input/SignUp-Input_Email';
import LoginTypeButtonWrapper from 'components/Molecules/Wrapper/LoginTypeButtonWrapper';
import { useInput } from 'hooks/useInput';
import { SignForm } from './SignCommon';
import { mainColor } from 'styles/global';
import { checkDuplicateID } from 'apis/accounts';
import { useRef, useState } from 'react';
import { Ref_T } from 'global_type_interface';

const SignUpForm = () => {
  const [id, handleSetId] = useInput('');
  const [password, handleSetPassword] = useInput('');
  const [passwordCheck, handleSetPasswordCheck] = useInput('');
  const [name, handleSetName] = useInput('');
  const [areaCode, , handleSetAreaCode] = useInput('010');
  const [exchageNumber, handleSetExchageNumber] = useInput('');
  const [subscriberNumber, handleSetSubscriberNumber] = useInput('');
  const [emailId, handleSetEmailId] = useInput('');
  const [domainName, handleSetDomainName] = useInput('');

  const [validationMessageID, setValidationMessageID] = useState<string | undefined>(undefined);
  const [errorPW, setErrorPW] = useState<boolean | undefined>(undefined);
  const [errorName, setErrorName] = useState<boolean | undefined>(undefined);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState<boolean | undefined>(undefined);
  const [errorEmail, setErrorEmail] = useState<boolean | undefined>(undefined);

  const inputRefID = useRef() as Ref_T;
  const inputRefPW = useRef() as Ref_T;
  const inputRefPWCheck = useRef() as Ref_T;
  const inputRefName = useRef() as Ref_T;
  const inputRefPhoneNumber = useRef() as Ref_T;
  const inputRefEmail = useRef() as Ref_T;

  const handleSignUp = () => {
    console.log(id);
    console.log(password);
    console.log(passwordCheck);
    console.log(name);
    console.log('areaCode : ' + areaCode);
    console.log(areaCode + exchageNumber + subscriberNumber);
    console.log(emailId + '@' + domainName);
  };

  const handleCheckDuplicationID = () => {
    checkDuplicateID({ username: id })
      .then(res => setValidationMessageID(res.data.Success))
      .catch(err => {
        const ERROR_MESSGE = err.response.data.FAIL_Message;

        if (ERROR_MESSGE === '이미 사용중인 아이디입니다') {
          setValidationMessageID(err.response.data.FAIL_Message);
        } //
        else setValidationMessageID('필수 정보입니다.');
      });
  };

  return (
    <>
      <SignForm alignItems='center'>
        <LoginTypeButtonWrapper sign='가입' />

        <InputUserAccountContainer>
          <SignUpInputID
            thisRef={inputRefID}
            value={id}
            setValue={handleSetId}
            onClickEvent={handleCheckDuplicationID}
            onBlurEvent={handleCheckDuplicationID}
            validation={validationMessageID === '멋진 아이디네요 :)'}
          />
          <ErrorMessage validation={validationMessageID === '멋진 아이디네요 :)'}>
            {validationMessageID !== undefined && validationMessageID}
          </ErrorMessage>

          <TextInputBox
            thisRef={inputRefPW}
            typeText='비밀번호'
            value={password}
            setValue={handleSetPassword}
            width='48rem'
            type='password'
            validation={true}
          />
          <TextInputBox
            typeText='비밀번호 재확인'
            value={passwordCheck}
            setValue={handleSetPasswordCheck}
            width='48rem'
            type='password'
            validation={true}
          />
        </InputUserAccountContainer>

        <InputUserInfoContainer>
          <TextInputBox
            typeText='이름'
            value={name}
            setValue={handleSetName}
            width='48rem'
            type='text'
            validation={true}
          />
          <SignUpInputPhoneNumber
            areaCode={areaCode}
            exchageNumber={exchageNumber}
            subscriberNumber={subscriberNumber}
            handleSetAreaCode={handleSetAreaCode}
            handleSetExchageNumber={handleSetExchageNumber}
            handleSetSubscriberNumber={handleSetSubscriberNumber}
          />
          <SignUpInputEmail
            emailId={emailId}
            domainName={domainName}
            handleSetEmailId={handleSetEmailId}
            handleSetDomainName={handleSetDomainName}
          />
        </InputUserInfoContainer>
      </SignForm>

      <CheckLabel>
        <CheckBox />
        <CheckText>
          호두샵의&nbsp;<HyperLink to=''>이용약관</HyperLink>&nbsp;및&nbsp;
          <HyperLink to=''>개인정보처리방침</HyperLink>에 대한 내용을 확인하였고 동의합니다.
        </CheckText>
      </CheckLabel>

      <MDisabledButton width='48rem' text='가입하기' onClickEvent={handleSignUp} />
    </>
  );
};

export default SignUpForm;

const InputUserAccountContainer = styled.div`
  margin-bottom: 3.8rem;
`;

const InputUserInfoContainer = styled.div`
  padding-bottom: 2.4rem;
`;

const ErrorMessage = styled.div<{ validation: boolean }>`
  margin: 1rem 0 1.2rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => (props.validation ? mainColor : '#eb5757')};
`;

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
