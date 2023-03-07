import SearchImage from 'components/_Atoms/Image/SearchImage';
import SearchInput from 'components/_Atoms/Input/SearchInput';
import styled from 'styled-components';
import { mainColor } from 'styles/global';

const ProductSearchInput = () => {
  return (
    <SearchContainer color={mainColor}>
      <SearchInput />
      <SearchImage />
    </SearchContainer>
  );
};

export default ProductSearchInput;

const SearchContainer = styled.div`
  border: 2px solid ${props => props.color};
  position: relative;
  width: 40rem;
  height: 4.6rem;
  border-radius: 5rem;
  padding: 1.3rem 2.2rem;
  margin-right: auto;
`;
