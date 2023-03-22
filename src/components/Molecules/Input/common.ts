import { Dispatch } from 'react';
import styled from 'styled-components';

import { Ref_T } from 'global_type_interface';
import { mainColor } from 'styles/global';

export interface SignUp_InputProps_I {
  thisRef?: Ref_T;
  value: string;
  setValue: Dispatch<any>;
  onBlurEvent?: () => void;
  validationMessage?: string;
}

export const ErrorMessage = styled.div<{ validation: boolean }>`
  margin: 1rem 0 1.2rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => (props.validation ? mainColor : '#eb5757')};
`;
