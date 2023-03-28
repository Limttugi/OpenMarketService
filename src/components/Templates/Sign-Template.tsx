import MainLogoLink from 'components/Atoms/Link/MainLogo-Link';
import styled from 'styled-components';

interface SignTemplateI {
  children: React.ReactNode;
}

const SignTemplate = ({ children }: SignTemplateI) => {
  return (
    <>
      <MainLogoLink width='23.8rem' height='7.4rem' margin='10rem auto 7rem auto' />
      <Main>{children}</Main>
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
