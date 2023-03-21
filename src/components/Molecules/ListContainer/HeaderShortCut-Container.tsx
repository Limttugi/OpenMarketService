import styled from 'styled-components';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LoginType } from 'recoil/atoms/member';

import useLocalStorage from 'hooks/useLocalStorage';

import ShoppingCart_ImgSrc from 'img/icon-shopping-cart.svg';
import ShoppingCartActive_ImgSrc from 'img/icon-shopping-cart-2.svg';
import User_ImgSrc from 'img/icon-user.svg';
import UserActive_ImgSrc from 'img/icon-user-2.svg';

import MyPageDropDownContainer from './MyPageDropDown-Container';
import HeaderShortCutIcon from 'components/Atoms/Icon/HeaderShortCut-Icon';

const HeaderShortCutContainer = () => {
  const [clickedMyPageIcon, setClickedMyPageIcon] = useState<boolean>(false);
  const loginType = useRecoilValue(LoginType);
  const checkIsLoggedIn = useLocalStorage().checkIsLoggedIn;

  const pathname = useLocation().pathname;
  const PATHNAME_CART = pathname === '/cart';

  return (
    <ShortCutWrapper>
      <li>
        <LinkWrapper to={checkIsLoggedIn() ? '/cart' : 'signin'}>
          <HeaderShortCutIcon
            text='장바구니'
            imageSrc={PATHNAME_CART ? ShoppingCartActive_ImgSrc : ShoppingCart_ImgSrc}
            isActive={PATHNAME_CART ? true : false}
          />
        </LinkWrapper>
      </li>

      <li>
        {checkIsLoggedIn() === false && (
          <LinkWrapper to={checkIsLoggedIn() ? '/cart' : 'signin'}>
            <HeaderShortCutIcon text='로그인' imageSrc={User_ImgSrc} isActive={false} />
          </LinkWrapper>
        )}

        {checkIsLoggedIn() &&
          (loginType === 'BUYER' ? (
            <>
              <HeaderShortCutIcon
                text='마이페이지'
                imageSrc={clickedMyPageIcon ? UserActive_ImgSrc : User_ImgSrc}
                isActive={clickedMyPageIcon}
                onClickEvent={() => setClickedMyPageIcon(!clickedMyPageIcon)}
              />
              {clickedMyPageIcon && <MyPageDropDownContainer />}
            </>
          ) : (
            '판매자센터'
          ))}
      </li>
    </ShortCutWrapper>
  );
};

export default HeaderShortCutContainer;

const ShortCutWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 12.8rem;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
