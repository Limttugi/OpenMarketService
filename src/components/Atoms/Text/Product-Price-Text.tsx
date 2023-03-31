import { CSS_I, ProductEssentialInfo_I } from 'global_type_interface';
import styled from 'styled-components';

type ProductEssentialInfo_T = Pick<ProductEssentialInfo_I, 'price'>;
type CSS_T = Pick<CSS_I, 'fontSize' | 'color' | 'alignItems'>;
interface ProductPriceText_I extends ProductEssentialInfo_T, CSS_T {
  subFontSize: string;
}

const ProductPriceText = ({ price, fontSize, subFontSize, color, alignItems }: ProductPriceText_I) => {
  const _price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <PriceWrapper color={color} alignItems={alignItems}>
      <Price fontSize={fontSize}>{_price}</Price>
      <Won fontSize={subFontSize}>원</Won>
    </PriceWrapper>
  );
};

export default ProductPriceText;

const PriceWrapper = styled.span<{ alignItems?: string }>`
  display: flex;
  align-items: ${props => props.alignItems};
  color: ${props => props.color};
`;

const Price = styled.p<Partial<CSS_T>>`
  font-size: ${props => props.fontSize};
  font-weight: 700;
  line-height: 3rem;
`;

const Won = styled.p<Partial<CSS_T>>`
  font-size: ${props => props.fontSize};
  font-weight: 400;
  line-height: 2rem;
  margin: 0.4rem 0 0 0.2rem;
`;
