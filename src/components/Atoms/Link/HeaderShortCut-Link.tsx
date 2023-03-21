import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderShortCutLink_I {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const HeaderShortCutLink = ({ href, children, isActive }: HeaderShortCutLink_I) => {
  return (
    <LinkWrapper to={href} isActive={isActive}>
      {children}
    </LinkWrapper>
  );
};

export default HeaderShortCutLink;

const LinkWrapper = styled(Link)<{ isActive: boolean }>`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
  text-decoration: none;
`;
