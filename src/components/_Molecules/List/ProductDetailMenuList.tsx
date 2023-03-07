import styled from 'styled-components';
import TapButton from 'components/_Atoms/Button/Tap/TapButton';
import PRODUCT_DETAIL_PAGE_MENU_LIST from 'constants/PRODUCT_DETAIL_PAGE_MENU_LIST';
import { useSetRecoilState } from 'recoil';
import { productSelectedMenuIndex } from 'recoil/atoms/product';

const ProductDetailMenuList = () => {
  const setSelectedMenuIndex = useSetRecoilState(productSelectedMenuIndex);

  return (
    <ProductMenuContainer>
      {PRODUCT_DETAIL_PAGE_MENU_LIST.map((list, index) => {
        return (
          <TapButton
            key={list + index}
            text={list}
            width='32rem'
            onClickEvent={() => {
              setSelectedMenuIndex(index);
            }}
            index={index}
          />
        );
      })}
    </ProductMenuContainer>
  );
};

export default ProductDetailMenuList;

const ProductMenuContainer = styled.div`
  margin-top: 14rem;
`;
