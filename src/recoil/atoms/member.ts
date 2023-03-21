import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginType = atom<'BUYER' | 'SELLER'>({
  key: 'LOGIN_TYPE_KEY',
  default: 'BUYER',
  effects_UNSTABLE: [persistAtom],
});
