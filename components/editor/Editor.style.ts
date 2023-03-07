import styled from "styled-components";

export const EditorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  #editor {
    background-color: white;
    border: 1px solid black;
    padding: 5rem;
    box-sizing: border-box;
    display: inline-block;
    font-weight: lighter;
    border-bottom: 1px solid #232323;
    width: 50rem;
    height: 70rem;
    font-family: Pretendard;
    overflow: hidden;
    cursor: text;
    line-height: 1em;
    font-size: 1.25rem;
    white-space: wrap;
    overflow-y: scroll;
    line-height: 1.3;

    &:focus {
      outline: none;
    }
  }
`;
