import { Dispatch } from 'react';
import { RegularExpressionLiteral } from 'typescript';

// CSS //
export interface CSS_I {
  width: string;
  height: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  fontSize?: string;
  color?: string;
}

// 상품 정보 //
export interface ProductEssentialInfo_I {
  image: string;
  price: number;
  product_id: number;
  product_name: string;
  store_name: string;
}

export interface Product_Info_I extends ProductEssentialInfo_I {
  created_at: string;
  product_info: string;
  seller: number;
  shopping_fee: number;
  shipping_method: string;
  stock: number;
  updated_at: string;
}

// 유저 정보 //
export interface UserInfo_I {
  username?: string;
  password?: string;
  passwordCheck?: string;
  name?: string;
  exchangeNumber?: number;
  subscriberNumber?: number;
  emailId?: string;
  domainName?: string;
}

export interface CheckInputUserInfo_I {
  inputValue: string;
  setErrorMessage: Dispatch<string>;
  subInputValue?: string;
  setSubErrorMessage?: Dispatch<string>;
  regExp?: RegExp;
}

// Input Ref //
export type Ref_T = React.ForwardedRef<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>;
