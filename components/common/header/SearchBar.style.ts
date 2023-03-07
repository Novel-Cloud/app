import { Input } from "@/components/atoms/Input.style";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const SearchBar = styled(Input)`
  width: 500px;
  padding-right: 50px;
  box-sizing: border-box;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
  cursor: pointer;
  & > svg {
    width: 20px;
    height: 20px;
  }
`;
