import theme from "@/styles/theme";
import { Varient } from "@/types/atoms.interface";
import styled from "styled-components";

interface InputProps {
  varient?: Varient;
  isFull?: boolean;
}

export const Input = styled.input<InputProps>`
  background-color: ${(props) =>
    props.varient === "primary" ? theme.primary : theme.secondary};
  color: ${(props) =>
    props.varient === "primary" ? theme.secondary : theme.primary};
  width: ${(props) => (props.isFull ? "100%" : "auto")};
  border: 0;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  &:focus {
    outline: none;
  }
`;
