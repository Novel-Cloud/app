import theme from "@/styles/theme";
import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
`;

export const ToolbarWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: ${theme.primary};
`;
