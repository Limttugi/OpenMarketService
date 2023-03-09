import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const memberType = atom<'구매' | '판매'>({
  key: 'member-type',
  default: '구매',
  effects_UNSTABLE: [persistAtom],
});
