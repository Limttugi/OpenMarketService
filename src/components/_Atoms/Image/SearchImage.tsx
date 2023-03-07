import styled from 'styled-components';
import SearchSvg from 'img/icon-search.svg';

const SearchImage = () => {
  return <Image src={SearchSvg} />;
};

export default SearchImage;

const Image = styled.img`
  position: absolute;
  top: 0.8rem;
  right: 2.2rem;
  width: 2.6rem;
  height: 2.6rem;
  cursor: pointer;
`;
