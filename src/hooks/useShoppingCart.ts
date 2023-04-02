import { useCallback, useState } from 'react';

const useShoppingCart = () => {
  const [numberOfProductToBuy, setNumberOfProductToBuy] = useState<number>(1);

  const handleSetnumberOfProductToBuy = useCallback((quantity: number) => {
    setNumberOfProductToBuy(quantity);
  }, []);

  return { numberOfProductToBuy, handleSetnumberOfProductToBuy };
};

export default useShoppingCart;
