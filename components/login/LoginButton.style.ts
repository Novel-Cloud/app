import styled from "styled-components";
import { Button } from "../atoms/Button.style";

export const LoginButton = styled(Button)<{ isFull?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isFull ? "100%" : "")};
  padding: 0.75rem 11rem;
  font-family: ${(props) => (props.isFull ? "" : "CookieRun-Regular")};
  border-radius: 9999px;
  font-size: 1.25rem;
  gap: 0.75rem;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    padding: 0.75rem 3rem;
  }
`;
