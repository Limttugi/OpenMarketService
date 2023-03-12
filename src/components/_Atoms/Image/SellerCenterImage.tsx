import styled from 'styled-components';
import ShoppingCartSvg from 'img/icon-shopping-bag.svg';
import { mainColor } from 'styles/global';

interface SellerCenterImageI {
  margin?: string;
}

const SellerCenterImage = ({ margin }: SellerCenterImageI) => {
  return <Image src={ShoppingCartSvg} margin={margin} />;
};

export default SellerCenterImage;

const Image = styled.img<{ margin: string | undefined }>`
  width: 3.2rem;
  height: 3.2rem;
  background-color: ${mainColor};
  margin: ${props => props.margin};
`;
