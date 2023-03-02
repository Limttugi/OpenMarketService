import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderImageI {
  imageSrc: string;
  text: string;
  href: string;
  textColor?: string;
}

const HeaderImageButton = ({ imageSrc, text, href, textColor }: HeaderImageI) => {
  return (
    <ButtonWrapper to={href}>
      <Image src={imageSrc} />
      <ButtonText color={textColor}>{text}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  margin-left: 2.6rem;
  text-decoration: none;
`;

const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  margin: 0 0.4rem 0.1rem 0;
`;

const ButtonText = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => props.color || '#767676'};
`;

export default HeaderImageButton;
