import styled from 'styled-components';

import { CSS_I } from 'global_type_interface';

export const ButtonCS = styled.button.attrs({ type: 'button' })`
  width: ${(props: Pick<CSS_I, 'width'>) => props.width};
`;

export const ButtonCS_Radius = styled.button.attrs({ type: 'button' })`
  border-radius: 0.5rem;
  width: ${(props: Pick<CSS_I, 'width'>) => props.width};
`;
