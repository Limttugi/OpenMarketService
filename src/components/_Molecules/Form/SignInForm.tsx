import styled from 'styled-components';
import TextInput from 'components/_Atoms/Input/TextInput';
import MButton from 'components/_Atoms/Button/Size/Medium/M-Button';
import MemberTypeButtonWrapper from '../MemberTypeButtonWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { loginRequest } from 'apis/accounts';
import { useRecoilValue } from 'recoil';
import { memberType } from 'recoil/atoms/member';
import { LOGIN_FAILURE } from 'constants/ERROR';
import { useRef, useState } from 'react';
import { SignForm } from './SignCommon';
import { useInput } from 'hooks/useInput';

const SignInForm = () => {
  const navigate = useNavigate();
  const idInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const pwInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [id, handleSetId] = useInput('');
  const [password, handleSetPassword] = useInput('');
  const [loginSuccess, setLoginSuccess] = useState(true);
  const login_type = useRecoilValue(memberType);

  const handleLoginRequest = async () => {
    if (idInputRef.current.value === '' && pwInputRef.current.value === '') {
      alert('아이디와 비밀번호가 입력되지 않았습니다');
      if (idInputRef.current) idInputRef.current.focus();
    } //
    else if (idInputRef.current.value === '') {
      alert('아이디가 입력되지 않았습니다');
      if (idInputRef.current) idInputRef.current.focus();
    } //
    else if (pwInputRef.current.value === '') {
      alert('비밀번호가 입력되지 않았습니다');
      if (pwInputRef.current) pwInputRef.current.focus();
    } //
    else {
      await loginRequest({ username: id, password, login_type, setLoginSuccess }).then(() => navigate(-1));
    }
  };

  return (
    <>
      <MemberTypeButtonWrapper sign='로그인' />
      <SignForm alignItems='center'>
        <TextInput
          myInputRef={idInputRef}
          value={id}
          setValue={handleSetId}
          id='id'
          width='48rem'
          type='text'
          placeholder='아이디'
        />
        <TextInput
          myInputRef={pwInputRef}
          value={password}
          setValue={handleSetPassword}
          id='pw'
          width='48rem'
          type='password'
          placeholder='비밀번호'
          margin='0.6rem 0 2.6rem 0'
        />
        {!loginSuccess && <ErrorMesaage>{LOGIN_FAILURE}</ErrorMesaage>}
        <MButton width='48rem' text='로그인' onClickEvent={handleLoginRequest} />
      </SignForm>

      <OtherMenuLinkContainer>
        <MenuLink to='/signup'>회원가입</MenuLink>
        <MenuDivide />
        <MenuLink to='/findpw'>비밀번호 찾기</MenuLink>
      </OtherMenuLinkContainer>
    </>
  );
};

export default SignInForm;

const ErrorMesaage = styled.p`
  width: 100%;
  height: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #eb5757;
  margin-bottom: 2.6rem;
`;

const OtherMenuLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;

const MenuLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  color: #333333;
  text-decoration: none;
`;

const MenuDivide = styled.div`
  width: 1px;
  height: 1.4rem;
  background-color: #333333;
  margin: 0 1.4rem;
`;
