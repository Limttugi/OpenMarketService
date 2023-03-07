import styled from 'styled-components';
import MainLogoImage from 'components/_Atoms/Image/MainLogoImage';
import { Link } from 'react-router-dom';

const MainLogoLink = () => {
  return (
    <MainLink>
      <Link to='/'>
        <MainLogoImage />
      </Link>
    </MainLink>
  );
};

export default MainLogoLink;

const MainLink = styled.h1`
  width: 12.4rem;
  height: 3.8rem;
  margin-right: 3rem;
  cursor: pointer;
`;
