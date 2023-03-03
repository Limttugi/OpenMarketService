import { instance } from 'apis';

export const getAllProducts = async () => {
  return await instance.get('products/');
};

export const getProductDetail = async (id: number | undefined) => {
  return await instance.get(`products/${id}`);
};
