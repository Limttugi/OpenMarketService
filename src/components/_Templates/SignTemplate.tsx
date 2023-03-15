import styled from 'styled-components';
import MainLogoImage from 'components/_Atoms/Image/MainLogoImage';

interface SignTemplateI {
  children: React.ReactNode;
}

const SignTemplate = ({ children }: SignTemplateI) => {
  return (
    <>
      <Main>
        <MainLogo>
          <MainLogoImage />
        </MainLogo>
        {children}
      </Main>
    </>
  );
};

export default SignTemplate;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

const MainLogo = styled.h1`
  width: 23.8rem;
  height: 7.4rem;
  margin-bottom: 7rem;
`;
