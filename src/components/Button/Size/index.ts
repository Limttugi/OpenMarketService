import styled from 'styled-components';

export interface ButtonBySizeI {
  width: string;
}

export const ButtonCS = styled.button`
  border-radius: 0.5rem;
  width: ${(props: ButtonBySizeI) => props.width};
`;
