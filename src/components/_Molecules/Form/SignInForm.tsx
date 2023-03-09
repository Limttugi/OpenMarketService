import styled from 'styled-components';
import TextInput from 'components/_Atoms/Input/TextInput';
import MButton from 'components/_Atoms/Button/Size/Medium/M-Button';
import MemberTypeButtonWrapper from '../MemberTypeButtonWrapper';
import { Link } from 'react-router-dom';
import { loginRequest } from 'apis/accounts';
import { useRecoilValue } from 'recoil';
import { memberType } from 'recoil/atoms/member';

const SignInForm = () => {
  const _memberType = useRecoilValue(memberType);

  const handleLoginRequest = async () => {
    const userID: HTMLInputElement | null = document.querySelector('#id');
    const userPW: HTMLInputElement | null = document.querySelector('#pw');

    const username = userID?.value;
    const password = userPW?.value;

    const res = await loginRequest({ username, password, login_type: _memberType });
  };

  return (
    <>
      <MemberTypeButtonWrapper sign='로그인' />
      <Form>
        <TextInput id='id' width='48rem' type='text' placeholder='아이디' />
        <TextInput id='pw' width='48rem' type='password' placeholder='비밀번호' margin='0.6rem 0 3.6rem 0' />
        <MButton width='48rem' text='로그인' onClickEvent={handleLoginRequest} />
      </Form>

      <OtherMenuLinkContainer>
        <MenuLink to='/join'>회원가입</MenuLink>
        <MenuDivide />
        <MenuLink to='/findpw'>비밀번호 찾기</MenuLink>
      </OtherMenuLinkContainer>
    </>
  );
};

export default SignInForm;

const Form = styled.form`
  position: relative;
  border: 1px solid #c4c4c4;
  border-radius: 0 0 1rem 1rem;
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55rem;
  height: 29.2rem;
  padding: 3.5rem;
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
