import styled from 'styled-components';
import UserImage from 'components/_Atoms/Image/UserImage';
import SignInImageText from 'components/_Atoms/Text/UserImageText';
import { useState } from 'react';
import MyPageDropDown from '../MyPageDropDown';

const MyPageLink = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleSetClicked = () => setClicked(!clicked);

  return (
    <MyPageIconWrapper onClick={handleSetClicked}>
      {clicked ? (
        <>
          <UserImage isActive={clicked} />
          <SignInImageText text='마이페이지' isActive={clicked} />
          <MyPageDropDown />
        </>
      ) : (
        <>
          <UserImage />
          <SignInImageText text='마이페이지' />
        </>
      )}
    </MyPageIconWrapper>
  );
};

export default MyPageLink;

const MyPageIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  margin-left: 2.6rem;
  text-decoration: none;
`;
