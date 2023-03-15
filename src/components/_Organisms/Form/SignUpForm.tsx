import styled from 'styled-components';
import { useInput } from 'hooks/useInput';
import MemberTypeButtonWrapper from '../../_Molecules/MemberTypeButtonWrapper';
import SignUpID from '../../_Molecules/Input/SignUpInput-ID';
import SignUpPhoneNumberInput from 'components/_Molecules/Input/SignUpPhoneNumberInput';
import { SignForm } from './SignCommon';

import SignUpEmailInput from '../../_Molecules/Input/SignUpEmailInput';
import { TextInputBox } from 'components/_Molecules/Input/TextInputBox';
import { Link } from 'react-router-dom';
import MDisabledButton from 'components/_Atoms/Button/Size/Medium/M-Disabled-Button';

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

  const handleSignUp = () => {
    console.log(id);
    console.log(password);
    console.log(passwordCheck);
    console.log(name);
    console.log('areaCode : ' + areaCode);
    console.log(areaCode + exchageNumber + subscriberNumber);
    console.log(emailId + '@' + domainName);
  };

  return (
    <>
      <MemberTypeButtonWrapper sign='가입' />
      <SignForm alignItems='flex-start'>
        <div>
          <SignUpID value={id} setValue={handleSetId} />
          <TextInputBox
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
        </div>

        <div style={{ marginTop: '3.8rem' }}>
          <TextInputBox
            typeText='이름'
            value={name}
            setValue={handleSetName}
            width='48rem'
            type='text'
            validation={true}
          />
          <SignUpPhoneNumberInput
            areaCode={areaCode}
            exchageNumber={exchageNumber}
            subscriberNumber={subscriberNumber}
            handleSetAreaCode={handleSetAreaCode}
            handleSetExchageNumber={handleSetExchageNumber}
            handleSetSubscriberNumber={handleSetSubscriberNumber}
          />
          <SignUpEmailInput
            emailId={emailId}
            domainName={domainName}
            handleSetEmailId={handleSetEmailId}
            handleSetDomainName={handleSetDomainName}
          />
        </div>
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
