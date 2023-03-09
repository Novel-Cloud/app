import theme from "@/styles/theme";
import styled from "styled-components";

export const EditorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  background-color: ${theme.primary};
  #editor {
    background-color: white;
    padding: 5rem;
    box-sizing: border-box;
    display: inline-block;
    font-weight: lighter;
    width: 50rem;
    height: 70rem;
    font-family: Pretendard;
    background-color: ${theme.secondary};
    color: ${theme.primary};
    overflow: hidden;
    cursor: text;
    line-height: 1em;
    font-size: 1.25rem;
    white-space: wrap;
    overflow-y: scroll;
    font-weight: 600;
    line-height: 1.3;

    &:focus {
      outline: none;
    }
  }
`;
