import theme from "@/styles/theme";
import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  gap: 8px;
  padding-bottom: 20px;
`;

export const ToolbarWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 20px 20px 0 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: ${theme.primary};
`;

export const ShortCutIconWrapper = styled.div`
  margin-right: 10px;
  svg {
    width: 40px;
    height: 40px;
  }
`;
