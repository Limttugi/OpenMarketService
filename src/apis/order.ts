import { instance } from 'apis';

export const getOrderList = async () => {
  return await instance.get('order/');
};

export const createOrderList = async () => {
  return await instance.post('order/');
};

export const createOrderAllListInCart = async () => {
  return await instance.post('order/');
};

export const createOrderOnlyOneInCart = async () => {
  return await instance.post('order/');
};
