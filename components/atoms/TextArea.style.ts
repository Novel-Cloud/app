import theme from "@/styles/theme";
import styled from "styled-components";

export const TextArea = styled.textarea`
  resize: none;
  height: 25rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  background-color: ${theme.secondary};
  border: 0;
  border-radius: 0.375rem;
  color: ${theme.primary};
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  &:focus {
    outline: none;
  }
`;
