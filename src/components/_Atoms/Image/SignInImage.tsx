import styled from 'styled-components';
import UserSvg from 'img/icon-user.svg';

const SignInImage = () => {
  return <Image src={UserSvg} />;
};

export default SignInImage;

const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  margin: 0 0.4rem 0.1rem 0;
`;
