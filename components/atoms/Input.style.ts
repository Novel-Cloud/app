import theme from "@/styles/theme";
import { Varient } from "@/types/atoms.interface";
import styled from "styled-components";

export const Input = styled.input<{ varient: Varient }>`
  background-color: ${theme.secondary};
  color: ${theme.primary};
  border: 0;
  border-radius: 9999px;
  padding: 1rem;
  &:focus {
    outline: none;
  }
`;
