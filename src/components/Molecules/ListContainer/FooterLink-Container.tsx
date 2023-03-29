import FooterMenuLink from 'components/Atoms/Link/FooterMenu-Link';
import FooterSNSLink from 'components/Atoms/Link/FooterSNS-Link';
import { FOOTER_MENU_LIST_SNS, FOOTER_MENU_LIST_TEXT } from 'constants/FOOTER_LINK';
import styled from 'styled-components';

const FooterLinkContainer = () => {
  return (
    <LinkContainer>
      <MenuListWrapper>
        {FOOTER_MENU_LIST_TEXT.map((text, index) => {
          return <FooterMenuLink key={text + index} text={text} to='/' />;
        })}
      </MenuListWrapper>

      <SNSListWrapper>
        {FOOTER_MENU_LIST_SNS.map((image, index) => {
          return <FooterSNSLink key={image[1] + index} href='/' imgSrc={image[0]} snsName={image[1]} />;
        })}
      </SNSListWrapper>
    </LinkContainer>
  );
};

export default FooterLinkContainer;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuListWrapper = styled.ul`
  display: flex;
  gap: 3.2rem;
`;

const SNSListWrapper = styled.ul`
  display: flex;
  gap: 1.4rem;
`;
