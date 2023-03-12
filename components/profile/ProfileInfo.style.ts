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
  padding-top: 7rem;
  padding-left: 7rem;
  margin: 0;
  font-size: 1.875rem;
  @media screen and (max-width: 768px) {
    padding-top: 15rem;
  }
`;

export const ProfileWrapper = styled.div`
  position: absolute;
  top: -9rem;
  left: 7rem;
`;

export const ProfileAvatarWrapper = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  color: ${theme.primary};
  justify-content: flex-end;
  padding: 0 7rem;
  font-size: 1.875rem;
  font-weight: 900;
  button {
    @media screen and (max-width: 768px) {
      padding-top: 80px;
    }
  }
`;

export const ProfileButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  #small {
    display: none;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    #large {
      display: none;
    }
    #small {
      display: block;
    }
  }
  button {
    font-size: 1.125rem;
    padding: 0.875rem 2.75rem;
  }
`;
