import { Input } from "@/components/atoms/Input.style";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const SearchBar = styled(Input)`
  width: 31.25rem;
  padding-left: 1rem;
  padding-right: 3rem;
  box-sizing: border-box;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
  cursor: pointer;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
