import styled from 'styled-components';

export interface ButtonPropsI {
  width: string;
}

export const ButtonCS = styled.button`
  border-radius: 0.5rem;
  width: ${(props: ButtonPropsI) => props.width};
`;
