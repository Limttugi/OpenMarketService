import { instance } from 'apis';

export const getAllProducts = async () => {
  return await instance.get('products/');
};
