import { getProductDetail } from 'apis/products';
import { selector } from 'recoil';
import { productIdState } from 'recoil/atoms/product';

export const handleGetProductDetail = selector({
  key: 'get-product-detail',
  get: async ({ get }) => {
    const productId = get(productIdState);

    try {
      const response = await getProductDetail(productId);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
});
