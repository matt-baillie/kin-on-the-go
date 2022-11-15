import styled from "styled-components";

export const FooterStyled = styled.footer`
  .main-footer {
    color: #fff;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme.colors.primary};
    h3 {
      color: ${({ theme }) => theme.colors.secondary};
    }
    span {
      font-weight: 600;
    }
    li {
      display: flex;
      justify-content: space-between;
      margin: 0.75rem 0;
      /* width: 90%; */
    }
    li p {
      display: inline;
      margin: 0;
    }
  }
  .sub-footer {
    padding: 0.5rem;
    background-color: #e4e4e4;
  }
`;
