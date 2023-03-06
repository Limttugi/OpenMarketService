import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const productIdState = atom<number | undefined>({
  key: 'ProductId',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

const productBuyQuantityState = atom<number>({
  key: 'ProductBuyQuantity',
  default: 1,
});

const productSelectedMenuIndex = atom<number>({
  key: 'productSelectedMenuIndex',
  default: 0,
});

export { productIdState, productBuyQuantityState, productSelectedMenuIndex };
