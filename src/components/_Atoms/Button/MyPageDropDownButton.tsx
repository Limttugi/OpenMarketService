import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { LoginType } from 'recoil/atoms/member';

export const MyPageDropDownButtonMyPage = () => {
  return (
    <MyPageButton style={CommonStyle} to='/mypage'>
      마이페이지
    </MyPageButton>
  );
};

export const MyPageDropDownButtonLogOut = () => {
  const setLoginType = useSetRecoilState(LoginType);

  const handleLogOut = () => {
    localStorage.removeItem('JWT');
    setLoginType('BUYER');
    window.location.reload();
  };

  return (
    <LogOutButton style={CommonStyle} onClick={handleLogOut}>
      로그아웃
    </LogOutButton>
  );
};

interface CommonStyleI {
  width: string;
  height: string;
}

const CommonStyle = {
  borderRadius: '0.5rem',
  width: '11rem',
  height: '4rem',
  fontSize: '1.6rem',
  fontWeight: '400',
};

const MyPageButton = styled(Link)<{ style: CommonStyleI }>`
  display: block;
  border: 1px solid transparent;
  border-radius: ${props => props.style.borderRadius};
  width: ${props => props.style.width};
  height: ${props => props.style.height};
  font-size: ${props => props.style.fontSize};
  font-weight: ${props => props.style.fontWeight};
  color: #767676;
  line-height: 4rem;
  text-align: center;
  text-decoration: none;
  background-color: white;
  margin-bottom: 1rem;
  &:hover {
    color: black;
    border: 1px solid #767676;
  }
`;

const LogOutButton = styled.button<{ style: CommonStyleI }>`
  border: 1px solid transparent;
  width: ${props => props.style.width};
  height: ${props => props.style.height};
  border-radius: ${props => props.style.borderRadius};
  font-size: ${props => props.style.fontSize};
  font-weight: ${props => props.style.fontWeight};
  color: #767676;
  background-color: white;
  &:hover {
    color: black;
    border: 1px solid #767676;
  }
`;
