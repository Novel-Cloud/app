import theme from "@/styles/theme";
import styled from "styled-components";

export const HeaderWrapper = styled.form`
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
`;
