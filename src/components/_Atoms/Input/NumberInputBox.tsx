import React, { useState } from 'react';
import styled from 'styled-components';
import { InputBoxCS, InputLabel } from './_InputCommonStyle';

interface NumberInputBoxI {
  id: string;
  width: string;
  labelText: string;
  inputUnit: string;
}

const NumberInputBox = ({ id, width, labelText, inputUnit }: NumberInputBoxI) => {
  const [enteredNum, setEnterdNum] = useState<string>('0');

  const onlyEnteredNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value;
    value = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    const removedCommaValue: number = Number(value.replaceAll(',', ''));
    setEnterdNum(removedCommaValue.toLocaleString());
  };

  return (
    <Label width={width}>
      {labelText}
      <Input id={id} value={enteredNum} onChange={onlyEnteredNum} />
      <InputUnit>{inputUnit}</InputUnit>
    </Label>
  );
};

export default NumberInputBox;

const Label = styled(InputLabel)`
  position: relative;
`;

const Input = styled(InputBoxCS).attrs({ type: 'text', maxLength: Number(15) })`
  border: 1px solid #c4c4c4;
  padding-right: 7.1rem;
  &:focus {
    outline: none;
  }
`;

const InputUnit = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0 0.5rem 0.5rem 0;
  width: 5.4rem;
  height: 5.4rem;
  line-height: 5.4rem;
  text-align: center;
  background-color: #c4c4c4;
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
`;
