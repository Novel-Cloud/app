import theme from "@/styles/theme";
import styled from "styled-components";

export const EditorWrapper = styled.div`
  background-color: ${theme.primary};
  display: flex;
  justify-content: center;
  padding: 2rem;

  #editor {
    overflow-y: auto !important;
    padding: 5rem calc(5rem - 1.125rem) 5rem 5rem;
    box-sizing: border-box;
    width: 50rem;
    height: 49rem;
    background-color: ${theme.secondary};
    color: ${theme.primary};
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
    cursor: text;
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 0.75rem;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.primary};
      border-radius: 9999px;
      border: 3px solid ${theme.secondary};
    }
    &::-webkit-scrollbar-track {
      background: ${theme.secondary};
    }
  }
`;
