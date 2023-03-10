import theme from "@/styles/theme";
import styled from "styled-components";

export const CommentWrapper = styled.div`
  padding: 25px 250px;
  margin-top: 30px;
  background-color: ${theme.primary};
  color: ${theme.secondary};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Comment = styled.div`
  display: flex;
  gap: 14px;
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
  font-size: 30px;
  margin: 0;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 30px;
`;
