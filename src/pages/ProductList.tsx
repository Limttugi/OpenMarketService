import { getAllProducts } from 'apis/products';
import Layout from 'components/Layout/Layout';
import ProductItem from 'components/ProductListPage/ProductItem/ProductItem';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

export interface productI {
  created_at?: string;
  image?: string;
  price?: number;
  product_id?: number;
  product_info?: string;
  product_name?: string;
  seller?: number;
  shopping_fee?: number;
  shipping_method?: string;
  stock?: number;
  store_name?: string;
  updated_at?: string;
}

const ProductList = () => {
  const [itemList, setItemList] = useState<Array<productI>>([]);

  useEffect(() => {
    getAllProducts().then(res => setItemList(res.data.results));
  }, []);

  return (
    <Layout>
      <>
        <MainBanner>슬라이더 구현 예정</MainBanner>

        <ProductItemListContainer>
          {itemList.map((product: productI) => {
            const { product_id, image, store_name, product_name, price } = product;

            return (
              <ProductItem
                key={product_id}
                product_id={product_id}
                image={image}
                store_name={store_name}
                product_name={product_name}
                price={price}
              />
            );
          })}
        </ProductItemListContainer>
      </>
    </Layout>
  );
};

const MainBanner = styled.ul`
  background-color: #f2f2f2;
  height: 50rem;
  text-align: center;
  font-size: 2rem;
  line-height: 50rem;
`;

const ProductItemListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7.8rem 7rem;
  padding: 0 32rem;
  margin: 8rem 0;
`;

export default ProductList;
