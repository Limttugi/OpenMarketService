import styled from 'styled-components';
import { Dispatch } from 'react';

import { InputBox, TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { ErrorMessage, SignUp_InputProps_I } from './common';
import { DOMAIN_REG_EXP, EMAIL_ID_REG_EXP } from 'constants/REGULAR_EXPRESSION';

interface SignUpInputEmail_I extends Pick<SignUp_InputProps_I, 'validationMessageOrPass' | 'onBlurEvent'> {
  emailId: string;
  domainName: string;
  handleSetEmailId: Dispatch<string>;
  handleSetDomainName: Dispatch<string>;
}

const SignUpInputEmail = ({
  emailId,
  domainName,
  handleSetEmailId,
  handleSetDomainName,
  validationMessageOrPass,
  onBlurEvent,
}: SignUpInputEmail_I) => {
  return (
    <fieldset>
      <TextInputBox
        typeText='이메일'
        value={emailId}
        setValue={handleSetEmailId}
        width='22rem'
        type='text'
        validation={validationMessageOrPass === true || validationMessageOrPass === ''}
        onBlurEvent={onBlurEvent}
      >
        <At>@</At>
        <InputBox
          value={domainName}
          onChange={handleSetDomainName}
          width='22rem'
          type='text'
          autoComplete='off'
          validation={validationMessageOrPass === true || validationMessageOrPass === ''}
          onBlur={onBlurEvent}
        />
      </TextInputBox>
      <ErrorMessage validation={validationMessageOrPass === ''}>
        {validationMessageOrPass !== '' && validationMessageOrPass}
      </ErrorMessage>
    </fieldset>
  );
};

export default SignUpInputEmail;

const At = styled.span`
  margin: 0 1.2rem;
`;
