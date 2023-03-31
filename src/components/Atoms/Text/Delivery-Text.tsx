import { CSS_I } from 'global_type_interface';
import styled from 'styled-components';

interface DeliveryText_I extends Pick<CSS_I, 'fontSize' | 'fontWeight' | 'lineHeight' | 'margin'> {}

const DeliveryText = ({ fontSize, fontWeight, lineHeight, margin }: DeliveryText_I) => {
  return (
    <Text fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} margin={margin}>
      택배배송 / 무료배송
    </Text>
  );
};

export default DeliveryText;

const Text = styled.div<DeliveryText_I>`
  color: #767676;

  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  margin: ${props => props.margin};
`;
