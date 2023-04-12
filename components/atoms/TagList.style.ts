import theme from "@/styles/theme";
import styled from "styled-components";

export const TagTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  padding: 4rem 0 0 7rem;
`;

export const TagWrapper = styled.article`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  overflow: auto;
  padding-bottom: 0.75rem;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.primary};
    border-radius: 9999px;
    border: 3px solid white;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

export const TagListWrapper = styled.div`
  padding: 3rem 0 0 7rem;
  @media screen and (max-width: 1024px) {
    padding: 3rem 0 0 5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 0 0 2rem;
  }
`;

export const TagListTitle = styled.h1`
  margin: 0;
  padding-bottom: 1.25rem;
`;
