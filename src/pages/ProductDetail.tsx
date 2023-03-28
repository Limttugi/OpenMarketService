import styled from 'styled-components';

import ProductDetailMenuContainer from 'components/Molecules/ListContainer/ProductDetailMenu-Container';
import ProductBuyAndDescriptionSection from 'components/Organisms/Section/ProductBuyAndDescription-Section';
import ProductDetailTemplate from 'components/Templates/ProductDetail-Template';

const ProductDetail = () => {
  return (
    <ProductDetailTemplate>
      <ProductBuyAndDescriptionSection />

      <ProductDetailMenuSection>
        <ProductDetailMenuContainer />
      </ProductDetailMenuSection>
    </ProductDetailTemplate>
  );
};

export default ProductDetail;

const ProductDetailMenuSection = styled.section`
  margin-top: 14rem;
`;
