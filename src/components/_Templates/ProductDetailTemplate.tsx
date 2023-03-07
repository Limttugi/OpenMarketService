import styled from 'styled-components';
import Header from 'components/_Organisms/Header/Header';

interface ProductDetailTemplateI {
  children: React.ReactNode;
}

const ProductDetailTemplate = ({ children }: ProductDetailTemplateI) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  margin-top: 17rem;
  padding: 0 32rem;
`;

export default ProductDetailTemplate;
