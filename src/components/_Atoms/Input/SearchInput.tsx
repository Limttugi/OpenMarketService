import styled from 'styled-components';

const SearchInput = () => {
  return <Input placeholder='상품을 검색해보세요!' />;
};

export default SearchInput;

const Input = styled.input.attrs({ type: 'text' })`
  border: none;
  width: calc(100% - 3.2rem);
  height: 100%;
  font-size: 1.6rem;
  &:focus {
    outline: none;
  }
`;
