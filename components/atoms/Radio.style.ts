import theme from "@/styles/theme";
import styled from "styled-components";

export const Radio = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 9999px;
  background-color: white;
  outline: 1px solid ${theme.primary};
  cursor: pointer;
  &:checked {
    border: 3px solid white;
    background-color: ${theme.primary};
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const RadioTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  font-size: 20px;
`;

export const RadioDescription = styled.span`
  font-size: 14px;
`;
