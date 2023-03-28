import styled from 'styled-components';

import ShoppingCartTemplate from 'components/Templates/ShoppingCart-Template';
import ProductImage from 'components/Atoms/Image/Product-Image';
import { useEffect, useState } from 'react';
import { bringCartList } from 'apis/cart';

const ShoppingCart = () => {
  const [list, setList] = useState();

  useEffect(() => {
    bringCartList()
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <ShoppingCartTemplate>
      <>
        <H2>장바구니</H2>

        <Form>
          <Table>
            <THead>
              <tr>
                <td>동그라미</td>
                <td>상품정보</td>
                <td>수량</td>
                <td>상품금액</td>
              </tr>
            </THead>

            <TBody>
              <tr>
                <td>
                  <input type='radio' name='' id='' />
                </td>
                <td>
                  <ProductImage
                    width='16rem'
                    height='16rem'
                    border='1px solid red'
                    borderRadius='1rem'
                    image=''
                    product_name=''
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </TBody>
          </Table>
        </Form>
      </>
    </ShoppingCartTemplate>
  );
};

export default ShoppingCart;

const H2 = styled.h2`
  text-align: center;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.4rem;
`;

const Form = styled.form`
  border: 1px solid black;
`;

const Table = styled.table`
  width: 100%;
`;

const THead = styled.thead`
  margin-bottom: 3.5rem;
  & > tr > td {
    border: 1px solid red;
    text-align: center;
    &:nth-child(1) {
      width: 8rem;
    }
    &:nth-child(2) {
      width: 67rem;
    }
    &:nth-child(3) {
      width: 5.4rem;
    }
    &:nth-child(4) {
      width: inherit;
    }
  }
`;

const TBody = styled.tbody``;
