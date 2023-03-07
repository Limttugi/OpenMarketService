import ProductBriefDescription from 'components/_Molecules/ProductBriefDescription';
import ProductDetailMenuList from 'components/_Molecules/List/ProductDetailMenuList';
import ProductDetailTemplate from 'components/_Templates/ProductDetailTemplate';

const ProductDetail = () => {
  return (
    <ProductDetailTemplate>
      <ProductBriefDescription />
      <ProductDetailMenuList />
    </ProductDetailTemplate>
  );
};

export default ProductDetail;
