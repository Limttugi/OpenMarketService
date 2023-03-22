import styled from 'styled-components';
import { Dispatch } from 'react';

import { InputBox, TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';

interface SignUpInputEmail_I {
  emailId: string;
  domainName: string;
  handleSetEmailId: Dispatch<string>;
  handleSetDomainName: Dispatch<string>;
  validation?: boolean;
}

const SignUpInputEmail = ({
  emailId,
  domainName,
  handleSetEmailId,
  handleSetDomainName,
  validation,
}: SignUpInputEmail_I) => {
  return (
    <TextInputBox
      typeText='이메일'
      value={emailId}
      setValue={handleSetEmailId}
      width='22rem'
      type='text'
      validation={validation}
    >
      <At>@</At>
      <InputBox
        value={domainName}
        onChange={handleSetDomainName}
        width='22rem'
        type='text'
        autoComplete='off'
        validation={validation}
      />
    </TextInputBox>
  );
};

export default SignUpInputEmail;

const At = styled.span`
  margin: 0 1.2rem;
`;
