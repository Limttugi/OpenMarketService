import styled from 'styled-components';
import SearchSvg from 'img/icon-search.svg';
import { mainColor } from 'styles/global';

const ProductSearchInput = () => {
  return (
    <SearchContainer>
      <Input placeholder='상품을 검색해보세요!' />
      <Image src={SearchSvg} />
    </SearchContainer>
  );
};

export default ProductSearchInput;

const SearchContainer = styled.div`
  border: 2px solid ${mainColor};
  position: relative;
  width: 40rem;
  height: 4.6rem;
  border-radius: 5rem;
  padding: 1.3rem 2.2rem;
  margin-right: auto;
`;

const Input = styled.input.attrs({ type: 'text' })`
  position: relative;
  border: none;
  width: calc(100% - 3.2rem);
  height: 100%;
  font-size: 1.6rem;
  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0.8rem;
  right: 2.2rem;
  width: 2.6rem;
  height: 2.6rem;
  cursor: pointer;
`;
