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
    </>
  );
};

const Main = styled.main`
  margin-top: 9rem;
`;

export default ProductListTemplate;