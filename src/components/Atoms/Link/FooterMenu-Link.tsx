import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface FooterMenuLink_I {
  text: string;
  to: string;
}

const FooterMenuLink = ({ text, to }: FooterMenuLink_I) => {
  return (
    <LinkWrapper to={to}>
      <li>{text}</li>
    </LinkWrapper>
  );
};

export default FooterMenuLink;

const LinkWrapper = styled(Link)`
  position: relative;

  color: black;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-decoration: none;

  &:nth-child(3) {
    font-weight: 700;
    &:after {
      font-weight: 400;
    }
  }

  &::after {
    content: '|';
    position: absolute;
    right: -1.6rem;
    top: 0;
  }
  &:last-child::after {
    content: '';
  }
`;
