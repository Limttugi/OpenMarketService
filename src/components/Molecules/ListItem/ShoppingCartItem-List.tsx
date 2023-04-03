import styled from 'styled-components';
import { useEffect, useState } from 'react';

import ProductImage from 'components/Atoms/Image/Product-Image';
import ProductNameText from 'components/Atoms/Text/Product-Name-Text';
import { Product_Info_I, Product_Info_In_ShoppingCart_I } from 'global_type_interface';
import { getProductDetail } from 'apis/products';
import ProductStoreNameText from 'components/Atoms/Text/Product-StoreName-Text';
import ProductPriceText from 'components/Atoms/Text/Product-Price-Text';
import CheckBoxInput from 'components/Atoms/Input/CheckBox-Input';
import DeliveryText from 'components/Atoms/Text/Delivery-Text';
import ProductQuantityButton from 'components/Atoms/Button/ProductQuantity-Button';
import useShoppingCart from 'hooks/useShoppingCart';
import SmallButton from 'components/Atoms/Button/Size/Small/S-Button';

interface ShoppingCartItemList_I extends Omit<Product_Info_In_ShoppingCart_I, 'quantity'> {
  cartQuantity: number;
}

const ShoppingCartItemList = ({
  my_cart,
  cart_item_id,
  product_id,
  cartQuantity,
  is_active,
}: ShoppingCartItemList_I) => {
  const { numberOfProductToBuy, handleSetnumberOfProductToBuy } = useShoppingCart();
  const [productInfo, setProductInfo] = useState<Product_Info_I>();
  const [checked, setChecked] = useState<boolean>(is_active);

  useEffect(() => {
    getProductDetail(product_id)
      .then(res => {
        setProductInfo(res.data);
      })
      .catch(err => console.error(err));
  }, [product_id]);

  return (
    <>
      {productInfo && (
        <List>
          <CheckBoxInput productId={1} isChecked={checked} setChecked={setChecked} />
          <ProductImage
            width='16rem'
            height='16rem'
            borderRadius='1rem'
            margin='0 3.6rem 0 5rem'
            image={productInfo.image}
            product_name={productInfo.product_name}
          />

          <div style={{ width: '42rem' }}>
            <ProductStoreNameText store_name={productInfo.store_name} fontSize='1.4rem' />
            <ProductNameText product_name={productInfo.product_name} fontSize='1.8rem' margin='1rem 0' />
            <ProductPriceText price={productInfo.price} fontSize='1.4rem' subFontSize='1.4rem' />
            <DeliveryText fontSize='1.4rem' fontWeight='400' lineHeight='1.8rem' margin='4rem 0 0 0' />
          </div>

          <ProductQuantityButton
            stock={productInfo?.stock}
            cartQuantity={cartQuantity}
            handleSetnumberOfProductToBuy={handleSetnumberOfProductToBuy}
          />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '14.8rem' }}>
            <ProductPriceText
              price={productInfo.price * numberOfProductToBuy}
              color='#eb5757'
              fontSize='1.6rem'
              subFontSize='1.8rem'
            />
            <SmallButton width='13rem' text='주문하기' />
          </div>
        </List>
      )}
    </>
  );
};

export default ShoppingCartItemList;

const List = styled.li`
  display: flex;
  align-items: center;
  border: 2px solid #e2e2e2;
  border-radius: 1rem;
  height: 20rem;
  padding-left: 4rem;
`;
