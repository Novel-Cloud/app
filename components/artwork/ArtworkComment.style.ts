import theme from "@/styles/theme";
import styled from "styled-components";

export const CommentWrapper = styled.div`
  margin-top: 1.875rem;
  background-color: ${theme.primary};
  color: ${theme.secondary};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem 6.25rem;
  @media screen and (max-width: 1024px) {
    padding: 1.25rem 3.75rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.25rem 1.25rem;
  }
`;

export const Comment = styled.div`
  display: flex;
  gap: 0.875rem;
`;
export const CommentWriter = styled.div`
  font-weight: 900;
  color: white;
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
  gap: 1.25rem;
  margin-bottom: 1.875rem;
`;
