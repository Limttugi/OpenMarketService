import styled from 'styled-components';
import { useQuery } from 'react-query';

import { getAllProducts } from 'apis/products';
import { Product_Info_I } from 'global_type_interface';
import ProductItemListItem from '../ListItem/ProductItem-ListItem';

const ProductItemListContainer = () => {
  const { data } = useQuery('productList', getAllProducts);

  return (
    <Section>
      <ListContainer>
        {data?.data.results.map((item: Product_Info_I) => {
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
