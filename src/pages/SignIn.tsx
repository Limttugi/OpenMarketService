import MainLogoImage from 'components/_Atoms/Image/MainLogoImage';
import SignInForm from 'components/_Molecules/Form/SignInForm';
import SignTemplate from 'components/_Templates/SignTemplate';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <SignTemplate>
      <MainLogo>
        <MainLogoImage />
      </MainLogo>
      <SignInForm />
    </SignTemplate>
  );
};

export default SignIn;

const MainLogo = styled.h1`
  width: 23.8rem;
  height: 7.4rem;
  margin-bottom: 7rem;
`;
