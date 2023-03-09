import styled from 'styled-components';

interface SignTemplateI {
  children: React.ReactNode;
}

const SignTemplate = ({ children }: SignTemplateI) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

export default SignTemplate;
