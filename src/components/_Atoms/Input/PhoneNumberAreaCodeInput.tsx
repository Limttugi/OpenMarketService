import AREACODE from 'constants/AREACODE';
import { Dispatch, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { mainColor } from 'styles/global';

interface PhoneNumberAreaCodeInputI {
  areaCode: number;
  handleSetAreaCode: Dispatch<number>;
}

const PhoneNumberAreaCodeInput = ({ areaCode, handleSetAreaCode }: PhoneNumberAreaCodeInputI) => {
  const areaCodeRef = useRef<HTMLInputElement>();
  const listRef = useRef<HTMLUListElement>();
  const [showAreaCodeOption, setShowAreaCodeOption] = useState<boolean>(false);

  useEffect(() => {
    const clickAreaCodeOutSide = (e: { target: any }) => {
      const areaCodeElement = areaCodeRef.current;
      const listElement = listRef.current;

      if (e.target === areaCodeElement) setShowAreaCodeOption(!showAreaCodeOption);

      if (e.target.parentNode !== listElement)
        if (areaCodeElement && !areaCodeElement.contains(e.target)) setShowAreaCodeOption(false);
    };

    document.addEventListener('mousedown', clickAreaCodeOutSide);

    return () => {
      document.removeEventListener('mousedown', clickAreaCodeOutSide);
    };
  });

  return (
    <AreaCodeWrapper>
      <PhoneNumberInput ref={areaCodeRef} value={areaCode} readOnly />
      {showAreaCodeOption && (
        <AreaCodeCustomSelectBox ref={listRef}>
          {AREACODE.map(code => {
            return (
              <AreaCodeOption
                className='areaOption'
                key={`area${code}`}
                onClick={(e: any) => {
                  console.log('listClick');
                  handleSetAreaCode(e.target.innerHTML);
                  setShowAreaCodeOption(false);
                }}
              >
                {code}
              </AreaCodeOption>
            );
          })}
        </AreaCodeCustomSelectBox>
      )}
    </AreaCodeWrapper>
  );
};

export default PhoneNumberAreaCodeInput;

const AreaCodeWrapper = styled.span`
  position: relative;
`;

const AreaCodeCustomSelectBox = styled.ul<{ ref?: any }>`
  position: absolute;
  left: 0;
  top: 3.8rem;
  border: 1px solid #c4c4c4;
  border-radius: 0.5rem;
  width: 15.2rem;
  height: 15rem;
  overflow: scroll;
  margin-top: 0.6rem;
  z-index: 1;
  &:active {
    outline: none;
  }
`;

const AreaCodeOption = styled.li<{ onClick?: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 4rem;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
`;

export const PhoneNumberInput = styled.input.attrs({
  type: 'number',
  className: 'signupPhoneNumber',
  maxLength: Number('4'),
})<{
  ref?: any;
  value?: any;
  onChange?: any;
}>`
  border: 1px solid #c4c4c4;
  border-radius: 0.5rem;
  width: 15.2rem;
  height: 5.4rem;
  padding: 1.6rem 1.7rem;
  margin-top: 1rem;
  background-color: white;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  &:focus {
    outline: none;
    border: 1px solid ${mainColor};
  }
  &:nth-of-type(2) {
    margin-left: 1.1rem;
  }
  &:first-child {
    margin-right: 1.1rem;
  }
`;
