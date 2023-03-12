import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const memberType = atom<'BUYER' | 'SELLER'>({
  key: 'member-type',
  default: 'BUYER',
  effects_UNSTABLE: [persistAtom],
});
