import styled from 'styled-components';

import Header from 'components/Organisms/Header/Header';
import Footer from 'components/Organisms/Footer/Footer';

interface ShoppingCartTemplate_I {
  children: React.ReactNode;
}

const ShoppingCartTemplate = ({ children }: ShoppingCartTemplate_I) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin-top: 14.4rem;
  padding: 0 32rem;
`;

export default ShoppingCartTemplate;
