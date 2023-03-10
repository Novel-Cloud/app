import theme from "@/styles/theme";
import styled from "styled-components";
import { ArtworkFrameWrapper } from "../atoms/Artwork.style";

export const ProfileInfoWrapper = styled.div`
  color: ${theme.secondary};

  ${ArtworkFrameWrapper} {
    margin-top: 0;
  }
`;

export const ProfileInfoTitle = styled.h2`
  padding-top: 200px;
  padding-left: 100px;
  margin: 0;
`;
