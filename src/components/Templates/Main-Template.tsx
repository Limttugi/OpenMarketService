import styled from 'styled-components';

import Header from 'components/Organisms/Header/Header';
import Footer from 'components/Organisms/Footer/Footer';

interface MainTemplate_I {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplate_I) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin-top: 9rem;
  padding: 0 32rem;
`;

export default MainTemplate;
