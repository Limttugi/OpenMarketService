import styled from 'styled-components';

import Header from 'components/Organisms/Header/Header';
import Footer from 'components/Organisms/Footer/Footer';

interface ProductDetailTemplate_I {
  children: React.ReactNode;
}

const ProductDetailTemplate = ({ children }: ProductDetailTemplate_I) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin-top: 17rem;
  padding: 0 32rem;
`;

export default ProductDetailTemplate;
