import { Dispatch, SetStateAction } from 'react';
import { instance, setInstanceHeaders } from 'apis';

export interface ErrorI {
  response: {
    status: number;
  };
}

interface loginI {
  userInputElement_ID: HTMLInputElement | null;
  userInputElement_PW: HTMLInputElement | null;
  login_type: string;
  setLoginSuccess: Dispatch<SetStateAction<boolean>>;
}

export const loginRequest = async ({
  userInputElement_ID,
  userInputElement_PW,
  login_type,
  setLoginSuccess,
}: loginI) => {
  const username = userInputElement_ID!.value;
  const password = userInputElement_PW!.value;

  try {
    const res = await instance.post('accounts/login/', { username, password, login_type });
    const JWT = res.data.token;

    localStorage.setItem('JWT', JWT);

    return setInstanceHeaders(JWT);
  } catch (e) {
    const Err = e as ErrorI;

    setLoginSuccess(false);
    return console.error(Err);
  }
};
