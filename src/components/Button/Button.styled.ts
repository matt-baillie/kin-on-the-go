import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  z-index: 1;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;
