import styled from 'styled-components';

import PlusImage from 'img/icon-plus-line.svg';
import PlusImageWhite from 'img/icon-plus-line-white.svg';
import MinusImage from 'img/icon-minus-line.svg';
import MinusImageWhite from 'img/icon-minus-line-white.svg';
import { useEffect, useState } from 'react';

interface ProductQuantityButton_I {
  cartQuantity?: number;
  stock?: number;
  handleSetnumberOfProductToBuy?: Function;
}

const ProductQuantityButton = ({ cartQuantity, stock, handleSetnumberOfProductToBuy }: ProductQuantityButton_I) => {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    handleSetnumberOfProductToBuy && handleSetnumberOfProductToBuy(quantity);
  }, [handleSetnumberOfProductToBuy, quantity]);

  useEffect(() => {
    cartQuantity && setQuantity(cartQuantity);
  }, [cartQuantity]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusQuantity = () => {
    if (stock && quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <ButtonWraaper>
      <MinusButton onClick={handleMinusQuantity} disabled={quantity > 1 ? false : true}>
        <img src={quantity > 1 ? MinusImage : MinusImageWhite} alt='MinusButton' />
      </MinusButton>
      <ProductQuantity>{quantity}</ProductQuantity>
      <PlusButton onClick={handlePlusQuantity} disabled={quantity === stock ? true : false}>
        <img src={quantity === stock ? PlusImageWhite : PlusImage} alt='PlusButton' />
      </PlusButton>
    </ButtonWraaper>
  );
};

export default ProductQuantityButton;

const ButtonWraaper = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  background-color: white;
  width: 15rem;
  height: 5rem;
  margin: 3rem 0;
`;

const MinusButton = styled.button.attrs({ type: 'button' })<{ disabled: any }>`
  border-right: 1px solid #c4c4c4;
  border-radius: 0.5rem 0 0 0.5rem;
  width: 100%;
  height: 100%;
  background-image: url(PlusSvg);
  background-color: ${props => props.disabled && '#e0e0e0'};
`;

const ProductQuantity = styled.span`
  border: none;
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
`;

const PlusButton = styled.button.attrs({ type: 'button' })<{ disabled: any }>`
  border-left: 1px solid #c4c4c4;
  border-radius: 0 0.5rem 0.5rem 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.disabled && '#e0e0e0'};
`;
