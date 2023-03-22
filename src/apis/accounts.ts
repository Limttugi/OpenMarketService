import { instance, setInstanceHeaders } from 'apis';

interface login_I {
  username: string;
  password: string;
  login_type: string;
}

interface createAccountBuyerI {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}

interface createAccountSellerI extends createAccountBuyerI {
  company_registration_number: string;
  store_name: string;
}

export const loginRequest = async ({ username, password, login_type }: login_I) => {
  const res = await instance.post('accounts/login/', { username, password, login_type });
  const JWT = res.data.token;

  localStorage.setItem('JWT', JWT);
  setInstanceHeaders(JWT);

  return res;
};

export const createAccountBuyer = async (createAccountData: createAccountBuyerI) => {
  const { username, password, password2, phone_number, name } = createAccountData;

  return await instance.post('accounts/signup/', { username, password, password2, phone_number, name });
};

export const createAccountSeller = async (createAccountData: createAccountSellerI) => {
  const { username, password, password2, phone_number, name, company_registration_number, store_name } =
    createAccountData;

  return await instance.post('accounts/signup/', {
    username,
    password,
    password2,
    phone_number,
    name,
    company_registration_number,
    store_name,
  });
};

export const checkDuplicateID = async ({ username }: Pick<login_I, 'username'>) => {
  return await instance.post('accounts/signup/valid/username/', { username });
};
