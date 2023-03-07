import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartImage, ShoppingCartActiveImage } from 'components/_Atoms/Image/ShoppingCartImage';
import ShoppingCartImageText from 'components/_Atoms/Text/ShoppingCartImageText';
import { mainColor } from 'styles/global';

const ShoppingCartLink = () => {
  const pathname = useLocation().pathname;

  return (
    <LinkWrapper to='/cart'>
      {pathname === '/cart' ? (
        <>
          <ShoppingCartActiveImage />
          <ShoppingCartImageText textColor={mainColor} />
        </>
      ) : (
        <>
          <ShoppingCartImage />
          <ShoppingCartImageText textColor='#767676' />
        </>
      )}
    </LinkWrapper>
  );
};

export default ShoppingCartLink;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  margin-left: 2.6rem;
  text-decoration: none;
`;
