import styled from 'styled-components';
import { getAllProducts } from 'apis/products';
import { useEffect, useState } from 'react';
import ProductDetailLink from 'components/_Molecules/Link/ProductDetailLink';

export interface productI {
  created_at?: string;
  image: string;
  price: number;
  product_id: number;
  product_info?: string;
  product_name: string;
  seller?: number;
  shopping_fee?: number;
  shipping_method?: string;
  stock?: number;
  store_name: string;
  updated_at?: string;
}

const ProductItemList = () => {
  const [itemList, setItemList] = useState<Array<productI>>([]);

  useEffect(() => {
    getAllProducts().then(res => setItemList(res.data.results));
  }, []);

  return (
    <List>
      {itemList.map((product: productI) => {
        const { product_id, image, store_name, product_name, price } = product;
        return (
          <ProductDetailLink
            key={product_id}
            productId={product_id}
            image={image}
            storeName={store_name}
            productName={product_name}
            price={price}
          />
        );
      })}
    </List>
  );
};

export default ProductItemList;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7.8rem 7rem;
  padding: 0 32rem;
  margin: 8rem 0;
`;
