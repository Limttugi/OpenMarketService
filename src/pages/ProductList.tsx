import MainBannerSlider from 'components/Atoms/Slider/MainBannerSlider';
import ProductItemListContainer from 'components/Molecules/ListContainer/ProductItemList-Container';
import ProductListTemplate from 'components/Templates/ProductList-Template';

const ProductList = () => {
  return (
    <ProductListTemplate>
      <MainBannerSlider />
      <ProductItemListContainer />
    </ProductListTemplate>
  );
};

export default ProductList;
