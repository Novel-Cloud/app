import styled from "styled-components";
import { Button } from "../atoms/Button.style";

export const LoginButton = styled(Button)<{ isFull?: boolean }>`
  font-family: ${(props) => (props.isFull ? "" : "CookieRun-Regular")};
  padding: 12px 11rem;
  width: ${(props) => (props.isFull ? "100%" : "")};
  border-radius: 9999px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-weight: 900;
`;
