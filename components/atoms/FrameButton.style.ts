import theme from "@/styles/theme";
import styled from "styled-components";
import { Button } from "./Button.style";

export const FrameButton = styled(Button)`
  padding: 0.8125rem 1.875rem 0.6875rem 1.875rem;
  border-radius: 1rem 1rem 0 0;
  background-color: ${theme.primary};
  color: ${theme.secondary};
  border: 1px solid ${theme.primary};
  &:hover {
    background-color: transparent;
    color: ${theme.primary};
  }
`;
