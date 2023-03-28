import { instance } from 'apis';

export const viewCartList = async () => {
  return await instance.get('cart/');
};

export const putProductInCart = async () => {
  return await instance.post('cart/');
};

export const cartDetail_DEVELOPER = async () => {
  return await instance.get(`cart/${'int:cart_item_id'}/`);
};

export const modifyProductQuantityInCart = async () => {
  return await instance.put(`cart/${'int:cart_item_id'}/`);
};

export const deleteAllProductInCart = async () => {
  return await instance.delete('cart/');
};
