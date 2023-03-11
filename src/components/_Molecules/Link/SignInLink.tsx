import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserImage from 'components/_Atoms/Image/UserImage';
import UserImageText from 'components/_Atoms/Text/UserImageText';

const SignInLink = () => {
  return (
    <LinkWrapper to='/signin'>
      <UserImage />
      <UserImageText text='로그인' />
    </LinkWrapper>
  );
};

export default SignInLink;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  margin-left: 2.6rem;
  text-decoration: none;
`;
