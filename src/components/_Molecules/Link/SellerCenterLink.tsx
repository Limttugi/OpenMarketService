import { MediumSmallButton18P } from 'components/_Atoms/Button/Size/MediumSmall/MS-Button';
import SellerCenterImage from 'components/_Atoms/Image/SellerCenterImage';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mainColor } from 'styles/global';

interface SellerCenterLinkI {
  margin?: string;
}

const SellerCenterLink = ({ margin }: SellerCenterLinkI) => {
  return (
    <LinkWrapper to='seller' margin={margin}>
      <SellerCenterImage margin='0 1rem 0 0' />
      <MediumSmallButton18P text='판매자 센터' width='auto'></MediumSmallButton18P>
    </LinkWrapper>
  );
};

export default SellerCenterLink;

const LinkWrapper = styled(Link)<{ margin: string | undefined }>`
  width: 16.8rem;
  background-color: ${mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  text-decoration: none;
  margin: ${props => props.margin};
`;
