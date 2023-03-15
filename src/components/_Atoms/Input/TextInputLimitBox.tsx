import { Dispatch, useState } from 'react';
import styled from 'styled-components';
import { InputBoxCS, InputLabel } from './_InputCommonStyle';

interface TextInputLimitBoxI {
  value: string | number | undefined;
  setValue: Dispatch<any>;
  id: string;
  width: string;
}

const TextInputLimitBox = ({ value, setValue, id, width }: TextInputLimitBoxI) => {
  const [valueLength, setValueLength] = useState<number>(0);

  const checkValueLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentLength = e.target.value.length;
    if (valueLength !== currentLength) {
      setValueLength(currentLength);
      setValue(e);
    }
  };

  return (
    <Label>
      상품명
      <Input id={id} value={value} placeholder='상품명' onChange={checkValueLength} />
      <Input width={width} id={id} value={value} placeholder='상품명' onChange={checkValueLength} />
      <TextLength>{valueLength}/50</TextLength>
    </Label>
  );
};

export default TextInputLimitBox;

const Label = styled(InputLabel)`
  position: relative;
`;

const Input = styled(InputBoxCS).attrs({ type: 'text', maxLength: Number(50) })`
  border: 1px solid #c4c4c4;
  padding-right: 6.6rem;
  &:focus {
    outline: none;
  }
`;

const TextLength = styled.p`
  position: absolute;
  right: 1.6rem;
  bottom: 1.7rem;
`;
