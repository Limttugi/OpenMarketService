import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignInImage from 'components/_Atoms/Image/SignInImage';
import SignInImageText from 'components/_Atoms/Text/SignInImageText';

const SignInLink = () => {
  return (
    <LinkWrapper to='/signin'>
      <SignInImage />
      <SignInImageText />
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
