import styled from 'styled-components';
import { ReactComponent as PlusSvg } from 'img/icon-plus-line.svg';
import { ReactComponent as MinusSvg } from 'img/icon-minus-line.svg';
import { useRecoilState } from 'recoil';
import { productBuyQuantityState } from 'recoil/atoms/product';

const ProductQuantityButton = () => {
  const [quantity, setQuantity] = useRecoilState(productBuyQuantityState);

  const handleMinusQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handlePlusQuantity = () => setQuantity(quantity + 1);

  return (
    <>
      <DividingLine />
      <ButtonWraaper>
        <MinusButton onClick={handleMinusQuantity}>
          <MinusImage />
        </MinusButton>
        <ProductQuantity>{quantity}</ProductQuantity>
        <PlusButton onClick={handlePlusQuantity}>
          <PlusImage />
        </PlusButton>
      </ButtonWraaper>
      <DividingLine />
    </>
  );
};

const DividingLine = styled.hr`
  border: none;
  background-color: #c4c4c4;
  width: 100%;
  height: 2px;
  &:nth-of-type(2) {
    margin-bottom: 3.2rem;
  }
`;

const ButtonWraaper = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 0.5rem;
  background-color: white;
  width: 15rem;
  height: 5rem;
  margin: 3rem 0;
  display: flex;
  align-items: center;
`;

const MinusButton = styled.button`
  border-right: 1px solid #c4c4c4;
  border-radius: 0.5rem 0 0 0.5rem;
  width: 100%;
  height: 100%;
  background-image: url(PlusSvg);
`;

const ProductQuantity = styled.div`
  border: none;
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
`;

const PlusButton = styled.button`
  border-left: 1px solid #c4c4c4;
  border-radius: 0 0.5rem 0.5rem 0;
  width: 100%;
  height: 100%;
`;

const PlusImage = styled(PlusSvg)`
  background-color: white;
  width: 2rem;
  height: 2rem;
`;

const MinusImage = styled(MinusSvg)`
  background-color: white;
  width: 2rem;
  height: 2rem;
`;

export default ProductQuantityButton;
