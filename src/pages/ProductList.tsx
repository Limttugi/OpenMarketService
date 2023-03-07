import MainTemplate from 'components/_Templates/SliderTemplate';
import ProductItemList from 'components/_Organisms/ProducItemtList/ProductItemList';
import MainBannerSlider from 'components/_Atoms/Slider/MainBannerSlider';

const ProductList = () => {
  return (
    <MainTemplate>
      <MainBannerSlider />
      <ProductItemList />
    </MainTemplate>
  );
};

export default ProductList;
