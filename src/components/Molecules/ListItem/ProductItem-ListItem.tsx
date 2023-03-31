import { Link } from 'react-router-dom';

import { ProductEssentialInfo_I } from 'global_type_interface';
import { productIdState } from 'recoil/atoms/product';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import ProductImage from 'components/Atoms/Image/Product-Image';
import ProductStoreNameText from 'components/Atoms/Text/Product-StoreName-Text';
import ProductNameText from 'components/Atoms/Text/Product-Name-Text';
import ProductPriceText from 'components/Atoms/Text/Product-Price-Text';

const ProductItemListItem = ({ product_id, image, store_name, product_name, price }: ProductEssentialInfo_I) => {
  const setProductId = useSetRecoilState(productIdState);
  const handleSetProductId = () => setProductId(product_id);

  return (
    <li>
      <LinkWrapper to={`detail/${product_id}`} onClick={handleSetProductId}>
        <ProductImage
          image={image}
          product_name={product_name}
          width='38rem'
          height='38rem'
          border='1px solid #c4c4c4'
          borderRadius='10px'
          margin=' 0 0 1.6rem 0'
        />

        <ProductStoreNameText store_name={store_name} fontSize='1.6rem' />
        <ProductNameText product_name={product_name} fontSize='1.8rem' margin='1rem 0' />
        <ProductPriceText price={price} fontSize='2.4rem' subFontSize='1.6rem' color='black' alignItems='center' />
      </LinkWrapper>
    </li>
  );
};

export default ProductItemListItem;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
