import ProductSearchInput from 'components/_Molecules/Input/ProductSearchInput';
import MainLogoLink from 'components/_Molecules/Link/MainLogoLink';
import MyPageLink from 'components/_Molecules/Link/MyPageLink';
import ShoppingCartLink from 'components/_Molecules/Link/ShoppingCartLink';
import SignInLink from 'components/_Molecules/Link/SignInLink';
import useLocalStorage from 'hooks/useLocalStorage';
import styled from 'styled-components';

const Header = () => {
  const { checkIsLoggedIn } = useLocalStorage();

  return (
    <HeaderContainer>
      <MainLogoLink />
      <ProductSearchInput />
      <ShoppingCartLink />
      {checkIsLoggedIn() ? <MyPageLink /> : <SignInLink />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 32rem;
  width: 100%;
  height: 9rem;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;
