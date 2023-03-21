import styled from 'styled-components';

import DropDownLink from 'components/Atoms/Link/DropDown-Link';
import { LoginType } from 'recoil/atoms/member';
import { useSetRecoilState } from 'recoil';

const MyPageDropDownContainer = () => {
  const setLoginType = useSetRecoilState(LoginType);

  const handleLogOut = () => {
    localStorage.removeItem('JWT');
    setLoginType('BUYER');
  };

  return (
    <ListContainer>
      <List>
        <DropDownLink href='/mypage' text='마이페이지' />
      </List>
      <List>
        <DropDownLink href='/' text='로그아웃' onClickEvent={handleLogOut} />
      </List>
    </ListContainer>
  );
};

export default MyPageDropDownContainer;

const ListContainer = styled.ul`
  position: absolute;
  top: 9rem;
  right: 28rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  width: 13rem;
  height: 10.8rem;

  background-color: white;
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.25));
  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem 0 0 0;
    background-color: white;
    z-index: -1;
  }
`;

const List = styled.li`
  border: 1px solid transparent;
  border-radius: 0.5rem;

  width: 11rem;
  height: 4rem;
  line-height: 4rem;
  background-color: white;

  color: #767676;
  text-align: center;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    border: 1px solid #767676;
    color: black;
  }
`;
