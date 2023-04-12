import theme from "@/styles/theme";
import styled from "styled-components";

export const AvatarWrapper = styled.div``;
export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${theme.secondary};
  img {
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    white-space: nowrap;
  }
`;
