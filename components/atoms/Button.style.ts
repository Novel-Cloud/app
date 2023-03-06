import theme from "@/styles/theme";
import { ButtonVarient } from "@/types/atoms.interface";
import styled from "styled-components";

export const DefaultButton = styled.button<{ varient: ButtonVarient }>`
  background-color: ${(props) =>
    props.varient === "primary" ? theme.main : theme.secondary};
  color: ${(props) =>
    props.varient === "primary" ? theme.black : theme.white};
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  border: 0;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  white-space: nowrap;
  word-break: keep-all;
`;

export default {};
