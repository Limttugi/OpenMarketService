import { CSS_I, ProductEssentialInfo_I } from 'global_type_interface';
import styled from 'styled-components';

type ProductEssentialInfo_T = Pick<ProductEssentialInfo_I, 'image' | 'product_name'>;
type CSS_T = Partial<Pick<CSS_I, 'width' | 'height' | 'border' | 'borderRadius' | 'margin'>>;

interface ProductImage_I extends ProductEssentialInfo_T, CSS_T {}

const ProductImage = ({ width, height, border, borderRadius, margin, image, product_name }: ProductImage_I) => {
  return (
    <Image
      src={image}
      alt={`${product_name} image`}
      width={width}
      height={height}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
    />
  );
};

export default ProductImage;

const Image = styled.img<CSS_T>`
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
`;
