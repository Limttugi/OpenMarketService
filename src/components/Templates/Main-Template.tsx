import styled from 'styled-components';
import Header from 'components/Organisms/Header/Header';

interface MainTemplateI {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateI) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  margin-top: 9rem;
  padding: 0 32rem;
`;

export default MainTemplate;
