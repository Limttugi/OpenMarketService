import MainTemplate from 'components/Templates/SliderTemplate';
import MainBannerSlider from 'components/Atoms/Slider/MainBannerSlider';
import ProductItemListContainer from 'components/Molecules/ListContainer/ProductItemList-Container';

const ProductList = () => {
  return (
    <MainTemplate>
      <MainBannerSlider />
      <ProductItemListContainer />
    </MainTemplate>
  );
};

export default ProductList;
