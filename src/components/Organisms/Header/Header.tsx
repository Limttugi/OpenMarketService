import styled from 'styled-components';

import ProductSearchInput from 'components/Atoms/Input/ProductSearch-Input';
import MainLogoLink from 'components/Atoms/Link/MainLogo-Link';
import HeaderShortCutContainer from 'components/Molecules/ListContainer/HeaderShortCut-Container';

const Header = () => {
  return (
    <HeaderContainer>
      <MainLogoLink width='12.4rem' height='3.8rem' margin='0 3rem 0 0' />
      <ProductSearchInput />
      <HeaderShortCutContainer />
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
