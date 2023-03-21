import styled from 'styled-components';
import { mainColor } from 'styles/global';

interface HeaderShortCutIcon_I {
  imageSrc: string;
  text: string;
  isActive: boolean;
  onClickEvent?: () => void;
}

const HeaderShortCutIcon = ({ imageSrc, text, isActive, onClickEvent }: HeaderShortCutIcon_I) => {
  return (
    <Wrapper isActive={isActive} onClick={onClickEvent}>
      <img src={imageSrc} alt='ShortCutImage' />
      {text}
    </Wrapper>
  );
};

export default HeaderShortCutIcon;

const Wrapper = styled.div<{ isActive: boolean }>`
  width: 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: ${props => (props.isActive ? mainColor : '#767676')};
`;
