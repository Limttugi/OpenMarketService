import { CSS_I, ProductEssentialInfo_I } from 'global_type_interface';
import styled from 'styled-components';

type ProductEssentialInfo_T = Pick<ProductEssentialInfo_I, 'store_name'>;
type CSS_T = Pick<CSS_I, 'fontSize'>;
interface ProductStoreNameText_I extends ProductEssentialInfo_T, CSS_T {}

const ProductStoreNameText = ({ store_name, fontSize }: ProductStoreNameText_I) => {
  return <StoreName fontSize={fontSize}>{store_name}</StoreName>;
};

export default ProductStoreNameText;

const StoreName = styled.p<CSS_T>`
  font-size: ${props => props.fontSize};
  font-weight: 400;
  line-height: 2.2rem;
  color: #767676;
`;
