import LoginTypeButton from 'components/Atoms/Button/LoginType-Button';
import styled from 'styled-components';

interface LoginTypeButtonWrapperI {
  sign: '로그인' | '가입';
}

const LoginTypeButtonWrapper = ({ sign }: LoginTypeButtonWrapperI) => {
  return (
    <Wrapper>
      <LoginTypeButton type={{ sign: sign, member: 'BUYER' }} />
      <LoginTypeButton type={{ sign: sign, member: 'SELLER' }} />
    </Wrapper>
  );
};

export default LoginTypeButtonWrapper;

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 3.4rem;
`;
