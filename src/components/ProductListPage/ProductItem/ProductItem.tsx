import { productI } from 'pages/ProductList';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { productIdState } from 'recoil/atoms/product';
import styled from 'styled-components';
import ProductNamePrice, { namePriceI } from '../../ProductDetailPage/NamePrice/ProductNamePrice';

const ProductItem = ({ product_id, image, store_name, product_name, price }: productI) => {
  const setProductId = useSetRecoilState(productIdState);

  const namePrice: namePriceI = { store_name, product_name, price };

  const handleSetProductId = () => setProductId(product_id);

  return (
    <ProductContainer to={`detail/${product_id}`} onClick={handleSetProductId}>
      <Image src={image} alt='productImage' />
      <ProductNamePrice
        storeNameFontSize='1.6rem'
        productNameFontSize='1.8rem'
        productNameMargin='1rem 0'
        priceFontSize='2.4rem'
        wonFontSize='1.6rem'
        wonLineHeight='2rem'
        namePrice={namePrice}
      />
    </ProductContainer>
  );
};

const ProductContainer = styled(Link)`
  width: 38rem;
  height: 49rem;
  text-decoration: none;
`;

const Image = styled.img`
  border: 1px solid #c4c4c4;
  width: 100%;
  height: 38rem;
  border-radius: 1rem;
  margin-bottom: 1.6rem;
`;

export default ProductItem;
