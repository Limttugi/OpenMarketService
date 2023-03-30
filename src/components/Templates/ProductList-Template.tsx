import Footer from 'components/Organisms/Footer/Footer';
import Header from 'components/Organisms/Header/Header';
import styled from 'styled-components';

interface ProductListTemplate_I {
  children: React.ReactNode;
}

const ProductListTemplate = ({ children }: ProductListTemplate_I) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main``;

export default ProductListTemplate;
