import styled from "styled-components";

export const EditorWrapper = styled.div`
  display: flex;
  justify-content: center;
  #editor {
    border: 1px solid black;
    padding: 1rem;
    display: inline-block;
    font-weight: lighter;
    border-bottom: 1px solid #232323;
    width: 800px;
    height: 1100px;
    font-family: Pretendard;
    overflow: hidden;
    cursor: text;
    line-height: 1em;
    font-size: 20px;
    white-space: wrap;
    overflow-y: scroll;
  }
`;
