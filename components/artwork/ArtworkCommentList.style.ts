import theme from "@/styles/theme";
import styled from "styled-components";

export const CommentWrapper = styled.div`
  margin-top: 1.875rem;
  background-color: ${theme.primary};
  color: ${theme.secondary};
`;

export const CommentViewWrapper = styled.div`
  box-sizing: border-box;
  padding: 1.25rem 6.25rem;
  @media screen and (max-width: 1024px) {
    padding: 1.25rem 3.75rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.25rem 1.25rem;
  }
  max-width: 1024px;
  margin: 0 auto;
`;

export const Comment = styled.div`
  display: flex;
  position: relative;
  gap: 0.875rem;
  img {
    cursor: pointer;
  }
`;
export const CommentWriter = styled.div`
  font-weight: 900;
  display: inline;
  color: white;
  cursor: pointer;
`;
export const CommentContent = styled.div`
  margin: 2px 0;
`;
export const CommentDate = styled.div``;
export const CommentTitle = styled.h2`
  font-size: 1.875rem;
  margin: 0;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 1rem 0;
`;
