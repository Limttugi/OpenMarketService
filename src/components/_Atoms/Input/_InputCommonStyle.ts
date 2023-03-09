import styled from 'styled-components';

export const InputCS = styled.input`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  &:focus {
    outline: none;
  }
`;

export const InputBoxCS = styled(InputCS)<{ maxLength?: string }>`
  border-radius: 0.5rem;
  height: 5.4rem;
  width: 100%;
  padding: 1.6rem 1.7rem;
  margin-top: 1rem;
`;

export const InputLabel = styled.label<{ width: string }>`
  display: block;
  width: ${props => props.width};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  color: #767676;
`;
