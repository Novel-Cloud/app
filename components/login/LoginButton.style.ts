import styled from "styled-components";
import { Button } from "../atoms/Button.style";

export const LoginButton = styled(Button)<{ isFull?: boolean }>`
  font-family: ${(props) => (props.isFull ? "" : "CookieRun-Regular")};
  padding: 0.75rem 11rem;
  width: ${(props) => (props.isFull ? "100%" : "")};
  border-radius: 9999px;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  font-weight: 900;
`;
