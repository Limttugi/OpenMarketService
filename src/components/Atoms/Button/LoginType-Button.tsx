import { useRecoilState } from 'recoil';
import { LoginType } from 'recoil/atoms/member';
import styled from 'styled-components';

interface LoginTypeButtonI {
  type: {
    sign: '로그인' | '가입';
    member: 'BUYER' | 'SELLER';
  };
}

const LoginTypeButton = ({ type }: LoginTypeButtonI) => {
  const [loginType, setLoginType] = useRecoilState(LoginType);

  const onChageLoginType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoginType(type.member);
  };

  return (
    <Button active={loginType === type.member} onClick={onChageLoginType}>
      {type.member === 'BUYER' ? '구매' : '판매'}회원 {type.sign}
    </Button>
  );
};

export default LoginTypeButton;

const Button = styled.button<{ active: boolean }>`
  border: 1px solid #c4c4c4;
  border-bottom: 1px solid transparent;
  border-radius: 1rem 1rem 0 0;
  width: 27.5rem;
  height: 6rem;
  font-size: 1.8rem;
  font-weight: 500;
  background-color: ${props => (props.active ? 'white' : '#f2f2f2')};
  border-bottom-color: ${props => (props.active ? 'white' : '#c4c4c4')};
`;
