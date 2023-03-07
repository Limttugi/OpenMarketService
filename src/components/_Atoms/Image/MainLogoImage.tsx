import styled from 'styled-components';
import Logo from 'img/Logo-hodu.png';

const MainLogoImage = () => {
  return <MainLogoImg src={Logo} alt='logo' />;
};

export default MainLogoImage;

const MainLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
