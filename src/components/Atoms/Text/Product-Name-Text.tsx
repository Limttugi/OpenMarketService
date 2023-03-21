import { CSS_I, ProductEssentialInfo_I } from 'global_type_interface';
import styled from 'styled-components';

type ProductEssentialInfo_T = Pick<ProductEssentialInfo_I, 'product_name'>;
type CSS_T = Pick<CSS_I, 'fontSize' | 'margin'>;
interface ProductNameText_I extends ProductEssentialInfo_T, CSS_T {}

const ProductNameText = ({ product_name, fontSize, margin }: ProductNameText_I) => {
  return (
    <Name fontSize={fontSize} margin={margin}>
      {product_name}
    </Name>
  );
};

export default ProductNameText;

const Name = styled.p<CSS_T>`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  font-weight: 400;
  line-height: 2.2rem;
  color: black;
`;
