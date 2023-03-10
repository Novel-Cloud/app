import theme from "@/styles/theme";
import styled from "styled-components";

export const EditorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: ${theme.primary};

  #editor {
    overflow-y: auto !important;
    padding: 5rem calc(5rem - 18px) 5rem 5rem;
    box-sizing: border-box;
    width: 50rem;
    height: 70rem;
    font-family: Pretendard;
    background-color: ${theme.secondary};
    color: ${theme.primary};
    cursor: text;
    font-size: 1.25rem;
    overflow-y: scroll;
    font-weight: 600;
    line-height: 1.3;
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.primary}; /* 스크롤바의 색상 */
      border-radius: 9999px;
      border: 3px solid ${theme.secondary};
    }
    &::-webkit-scrollbar-track {
      background: ${theme.secondary}; /*스크롤바 뒷 배경 색상*/
    }
  }
`;
