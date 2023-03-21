export interface CSS_I {
  width: string;
  height: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  fontSize?: string;
  color?: string;
}

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

export type Ref_T = React.ForwardedRef<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>;
