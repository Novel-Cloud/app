import { Input } from "@/components/atoms/Input.style";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const SearchBar = styled(Input)`
  width: 90vw;
  max-width: 31.25rem;
  padding-left: 1rem;
  padding-right: 3rem;
  box-sizing: border-box;
  font-family: "CookieRun-Regular";
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1.25rem;
  cursor: pointer;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
