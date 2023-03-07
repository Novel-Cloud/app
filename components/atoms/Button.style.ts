import theme from "@/styles/theme";
import { Varient } from "@/types/atoms.interface";
import styled from "styled-components";

export const Button = styled.button<{ varient: Varient }>`
  background-color: ${(props) =>
    props.varient === "primary" ? theme.secondary : theme.primary};
  color: ${(props) =>
    props.varient === "primary" ? theme.primary : theme.secondary};
  padding: 0.5rem 1.25rem;
  font-weight: bold;
  border: 0;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  white-space: nowrap;
  word-break: keep-all;
`;

export default {};
