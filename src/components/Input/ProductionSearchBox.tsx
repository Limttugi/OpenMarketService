import styled from 'styled-components';

import { mainColor } from 'styles/global';
import SearchSvg from 'img/icon-search.svg';

const ProductionSearchBox = () => {
  return (
    <SearchContainer color={mainColor}>
      <SearchBox color={mainColor} placeholder='상품을 검색해보세요!' />
      <SearchIcon src={SearchSvg} />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  border: 2px solid ${props => props.color};
  position: relative;
  width: 40rem;
  height: 4.6rem;
  border-radius: 5rem;
  padding: 1.3rem 2.2rem;
  margin-right: auto;
`;

const SearchBox = styled.input.attrs({ type: 'text' })`
  border: none;
  width: calc(100% - 3.2rem);
  height: 100%;
  font-size: 1.6rem;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 0.8rem;
  right: 2.2rem;
  width: 2.6rem;
  height: 2.6rem;
  cursor: pointer;
`;

export default ProductionSearchBox;
