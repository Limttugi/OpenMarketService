import ProductSearchInput from 'components/_Molecules/Input/ProductSearchInput';
import MainLogoLink from 'components/_Molecules/Link/MainLogoLink';
import MyPageLink from 'components/_Molecules/Link/MyPageLink';
import SellerCenterLink from 'components/_Molecules/Link/SellerCenterLink';
import ShoppingCartLink from 'components/_Molecules/Link/ShoppingCartLink';
import SignInLink from 'components/_Molecules/Link/SignInLink';
import useLocalStorage from 'hooks/useLocalStorage';
import { useRecoilValue } from 'recoil';
import { memberType } from 'recoil/atoms/member';
import { HeaderContainer } from '.';

const Header = () => {
  const loginType = useRecoilValue(memberType);
  const { checkIsLoggedIn } = useLocalStorage();

  return (
    <HeaderContainer>
      <MainLogoLink />
      <ProductSearchInput />
      <ShoppingCartLink />
      {checkIsLoggedIn() ? (
        loginType === 'BUYER' ? (
          <MyPageLink />
        ) : (
          <SellerCenterLink margin='0 0 0 3rem' />
        )
      ) : (
        <SignInLink />
      )}
    </HeaderContainer>
  );
};

export default Header;
