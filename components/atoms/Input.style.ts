import theme from "@/styles/theme";
import { Varient } from "@/types/atoms.interface";
import styled from "styled-components";

export const Input = styled.input<{ varient?: Varient }>`
  background-color: ${(props) =>
    props.varient === "primary" ? theme.secondary : theme.primary};
  color: ${(props) =>
    props.varient === "primary" ? theme.primary : theme.secondary};
  border: 0;
  border-radius: 9999px;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;
