import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CSS_I } from 'global_type_interface';
import MainLogo from 'img/Logo-hodu.png';

type CSS_T = Pick<CSS_I, 'width' | 'height' | 'margin'>;

interface MainLogoLink_I extends CSS_T {}

const MainLogoLink = ({ width, height, margin }: MainLogoLink_I) => {
  return (
    <H1 width={width} height={height} margin={margin}>
      <Link to='/'>
        <MainLogoImg src={MainLogo} alt='MainLogoLink' />
      </Link>
    </H1>
  );
};

export default MainLogoLink;

const H1 = styled.h1<Partial<CSS_I>>`
  width: ${props => props.width};
  min-width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin && props.margin};
  cursor: pointer;
`;

const MainLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
