import TabButton from 'components/Atoms/Button/Tab-Button';
import PRODUCT_DETAIL_PAGE_MENU_LIST from 'constants/PRODUCT_DETAIL_PAGE_MENU_LIST';
import { useSetRecoilState } from 'recoil';
import { productSelectedMenuIndex } from 'recoil/atoms/product';

const ProductDetailMenuContainer = () => {
  const setSelectedMenuIndex = useSetRecoilState(productSelectedMenuIndex);

  return (
    <ul>
      {PRODUCT_DETAIL_PAGE_MENU_LIST.map((list, index) => {
        return (
          <TabButton
            key={list + index}
            text={list}
            width='32rem'
            onClickEvent={() => setSelectedMenuIndex(index)}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default ProductDetailMenuContainer;
