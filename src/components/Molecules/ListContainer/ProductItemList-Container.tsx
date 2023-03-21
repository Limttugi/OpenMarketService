import styled from 'styled-components';

import { useLayoutEffect } from 'react';

import { getAllProducts } from 'apis/products';

import { Product_Info_I } from 'global_type_interface';
import ProductItemListItem from '../ListItem/ProductItem-ListItem';
import { useRecoilState } from 'recoil';
import { productListState } from 'recoil/atoms/product';

const ProductItemListContainer = () => {
  const [productList, setProductList] = useRecoilState(productListState);

  useLayoutEffect(() => {
    getAllProducts()
      .then(res => {
        if (res.data.results !== productList) setProductList(res.data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Section>
      <ListContainer>
        {productList.map((item: Product_Info_I) => {
          const { product_id, image, store_name, product_name, price } = item;

          return (
            <ProductItemListItem
              key={'key' + item.product_id}
              product_id={product_id}
              image={image}
              store_name={store_name}
              product_name={product_name}
              price={price}
            />
          );
        })}
      </ListContainer>
    </Section>
  );
};

export default ProductItemListContainer;

const Section = styled.section`
  padding: 0 32rem;
`;

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7.8rem 7rem;
  margin: 8rem 0;
`;
