import styled from 'styled-components';

export const SignForm = styled.form<{ alignItems: string }>`
  position: relative;
  border: 1px solid #c4c4c4;
  border-radius: 1rem 1rem 1rem 1rem;
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
  width: 55rem;
  padding: 0 3.5rem 0 3.5rem;
`;
