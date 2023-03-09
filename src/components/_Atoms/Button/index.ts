import styled from 'styled-components';

export interface ButtonWidthPropsI {
  width: string;
}

export const ButtonCS = styled.button.attrs({ type: 'button' })`
  width: ${(props: ButtonWidthPropsI) => props.width};
`;

export const ButtonCS_Radius = styled.button.attrs({ type: 'button' })`
  border-radius: 0.5rem;
  width: ${(props: ButtonWidthPropsI) => props.width};
`;
