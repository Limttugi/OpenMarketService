import styled from 'styled-components';

export const InputCS = styled.input`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  &:focus {
    outline: none;
  }
`;

export const InputBoxCS = styled(InputCS)`
  border-radius: 0.5rem;
  height: 5.4rem;
  padding: 1.6rem 1.7rem;
  margin-top: 1rem;
`;

export const InputLabel = styled.label`
  display: block;
  width: auto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  color: #767676;
  margin-bottom: 1.2rem;
`;
