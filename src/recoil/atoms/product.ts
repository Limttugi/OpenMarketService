import { Product_Info_I } from 'global_type_interface';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const productIdState = atom<number | undefined>({
  key: 'ProductId',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const productBuyQuantityState = atom<number>({
  key: 'ProductBuyQuantity',
  default: 1,
});

export const productSelectedMenuIndex = atom<number>({
  key: 'productSelectedMenuIndex',
  default: 0,
});

export const productListState = atom<Array<Product_Info_I>>({
  key: 'ProductList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
