import { useInput } from 'hooks/useInput';
import { useState } from 'react';
import styled from 'styled-components';
import { InputBoxCS, InputLabel } from './_InputCommonStyle';

interface TextInputLimitBoxI {
  id: string;
  width: string;
}

const TextInputLimitBox = ({ id, width }: TextInputLimitBoxI) => {
  const { value, handleSetValue } = useInput('');
  const [valueLength, setValueLength] = useState<number>(0);

  const checkValueLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentLength = e.target.value.length;
    if (valueLength !== currentLength) {
      setValueLength(currentLength);
      handleSetValue(e);
    }
  };

  return (
    <Label width={width}>
      상품명
      <Input id={id} value={value} placeholder='상품명' onChange={checkValueLength} />
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
