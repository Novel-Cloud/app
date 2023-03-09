import theme from "@/styles/theme";
import styled from "styled-components";

export const TextArea = styled.textarea`
  resize: none;
  height: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  background-color: ${theme.secondary};
  border: 0;
  border-radius: 6px;
  color: ${theme.primary};
  &:focus {
    outline: none;
  }
`;
