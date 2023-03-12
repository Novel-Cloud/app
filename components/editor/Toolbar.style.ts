import theme from "@/styles/theme";
import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1.25rem;
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
    border-radius: 9999px;
  }
`;

export const ToolbarWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 1.25rem 1.25rem 0 1.25rem;
  filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
  background-color: ${theme.primary};
`;

export const ShortCutIconWrapper = styled.div`
  margin-right: 0.625rem;
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
