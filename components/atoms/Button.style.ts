import theme from "@/styles/theme";
import { Varient } from "@/types/atoms.interface";
import styled from "styled-components";

interface StyledButtonProps {
  varient?: Varient;
}

export const Button = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.varient === "primary" ? theme.secondary : theme.primary};
  color: ${(props) =>
    props.varient === "primary" ? theme.primary : theme.secondary};
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  font-weight: 900;
  border: 0;
  font-size: 0.875rem;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
`;

export default {};
