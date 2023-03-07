import ProductSearchInput from 'components/_Molecules/Input/ProductSearchInput';
import MainLogoLink from 'components/_Molecules/Link/MainLogoLink';
import ShoppingCartLink from 'components/_Molecules/Link/ShoppingCartLink';
import SignInLink from 'components/_Molecules/Link/SignInLink';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <MainLogoLink />
      <ProductSearchInput />
      {/* 로그인 X */}
      <ShoppingCartLink />
      <SignInLink />
      {/* 로그인 O */}
      {/* {pathname === '/mypage' ? (
      <HeaderImageButton imageSrc={UserSvg} text='마이페이지' href='/mypage' textColor="green" />
    ) : (
      <HeaderImageButton imageSrc={UserActiveSvg} text='마이페이지' href='/mypage' />
    )} */}
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
