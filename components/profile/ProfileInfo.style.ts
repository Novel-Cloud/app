import theme from "@/styles/theme";
import styled from "styled-components";
import { ArtworkFrameWrapper } from "../atoms/Artwork.style";

export const ProfileInfoWrapper = styled.div`
  position: relative;
  color: ${theme.secondary};
  ${ArtworkFrameWrapper} {
    margin-top: 0;
  }
`;

export const ProfileInfoTitle = styled.h2`
  padding-top: 9.375rem;
  padding-left: 6.25rem;
  margin: 0;
  font-size: 1.875rem;
`;

export const ProfileAvatarWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 13.75rem;
  height: 13.75rem;
  top: -9.375rem;
  left: 7rem;
  text-align: center;
  color: ${theme.primary};
  span {
    font-size: 1.875rem;
    font-weight: 900;
  }
  img {
    margin-top: 2.5rem;
  }
`;

export const ProfileButtonWrapper = styled.div`
  position: absolute;
  right: 8rem;
  top: 2rem;
  button {
    font-size: 1.125rem;
    padding: 0.875rem 2.75rem;
  }
`;
