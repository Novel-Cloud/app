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
  padding-top: 150px;
  padding-left: 100px;
  margin: 0;
  font-size: 30px;
`;

export const ProfileAvatarWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 220px;
  top: -150px;
  left: 7rem;
  text-align: center;
  color: ${theme.primary};
  span {
    font-size: 30px;
    font-weight: 900;
  }
  img {
    margin-top: 40px;
  }
`;

export const ProfileButtonWrapper = styled.div`
  position: absolute;
  right: 8rem;
  top: 2rem;
  button {
    font-size: 18px;
    padding: 14px 44px;
  }
`;
