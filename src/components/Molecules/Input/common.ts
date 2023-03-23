import { Dispatch } from 'react';
import styled from 'styled-components';

import { Ref_T } from 'global_type_interface';
import { mainColor } from 'styles/global';

export interface SignUp_InputProps_I {
  thisRef?: Ref_T;
  value: string;
  setValue: Dispatch<any>;
  onBlurEvent?: () => void;
  validationMessageOrPass?: any;
}

export const ErrorMessage = styled.strong<{ validation: boolean }>`
  display: block;
  margin: 1rem 0 1.2rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => (props.validation ? mainColor : '#eb5757')};
`;
