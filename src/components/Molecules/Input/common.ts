import styled from 'styled-components';

import { mainColor } from 'styles/global';

export const ErrorMessage = styled.div<{ validation: boolean }>`
  margin: 1rem 0 1.2rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => (props.validation ? mainColor : '#eb5757')};
`;
