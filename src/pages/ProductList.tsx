import MainBannerSlider from 'components/Atoms/Slider/MainBannerSlider';
import ProductItemListContainer from 'components/Molecules/ListContainer/ProductItemList-Container';
import MainTemplate from 'components/Templates/Main-Template';

const ProductList = () => {
  return (
    <MainTemplate>
      <MainBannerSlider />
      <ProductItemListContainer />
    </MainTemplate>
  );
};

export default ProductList;
