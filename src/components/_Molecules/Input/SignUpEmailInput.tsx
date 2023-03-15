import styled from 'styled-components';
import { Dispatch } from 'react';
import { InputBox, TextInputBox } from './TextInputBox';

interface SignUpEmailInputI {
  emailId: string;
  domainName: string;
  handleSetEmailId: Dispatch<string>;
  handleSetDomainName: Dispatch<string>;
}

const SignUpEmailInput = ({ emailId, domainName, handleSetEmailId, handleSetDomainName }: SignUpEmailInputI) => {
  return (
    <TextInputBox typeText='이메일' value={emailId} setValue={handleSetEmailId} width='22rem' type='text'>
      <At>@</At>
      <InputBox value={domainName} onChange={handleSetDomainName} width='22rem' type='text' autoComplete='off' />
    </TextInputBox>
  );
};

export default SignUpEmailInput;

const At = styled.span`
  margin: 0 1.2rem;
`;
