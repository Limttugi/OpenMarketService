import styled from 'styled-components';

export interface ProductImageI {
  image: string;
}

export const ProductImageInMainPage = ({ image }: ProductImageI) => {
  return <ImageInMainPage src={image} alt='productImage' />;
};

export const ProductImageInDetailPage = ({ image }: ProductImageI) => {
  return <ImageInDetailPage src={image} alt='productImage' />;
};

const ImageInMainPage = styled.img`
  border: 1px solid #c4c4c4;
  width: 38rem;
  height: 38rem;
  border-radius: 1rem;
  margin-bottom: 1.6rem;
`;

const ImageInDetailPage = styled.img`
  border: none;
  width: 60rem;
  height: 60rem;
`;
