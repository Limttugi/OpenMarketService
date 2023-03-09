import { instance } from 'apis';

interface loginI {
  username: string | undefined;
  password: string | undefined;
  login_type: string;
}

export const loginRequest = async ({ username, password, login_type }: loginI) => {
  const type = login_type === '구매' ? 'BUYER' : 'SELLER';
  console.log(username);
  console.log(password);
  console.log(type);

  return await instance.post('accounts/login', { username, password, login_type: type });
};
