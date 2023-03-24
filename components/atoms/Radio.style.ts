import theme from "@/styles/theme";
import styled from "styled-components";

export const Radio = styled.input`
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
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
  flex-wrap: wrap;
`;

export const RadioTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  font-size: 1.25rem;
`;

export const RadioDescription = styled.span`
  font-size: 0.875rem;
`;
