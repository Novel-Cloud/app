import theme from "@/styles/theme";
import { Varient } from "@/types/atoms.interface";
import styled from "styled-components";

export const DefaultButton = styled.button<{ varient: Varient }>`
  background-color: ${(props) =>
    props.varient === "primary" ? theme.primary : theme.secondary};
  color: ${(props) =>
    props.varient === "primary" ? theme.black : theme.white};
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  border: 0;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  white-space: nowrap;
  word-break: keep-all;
`;

export default {};
