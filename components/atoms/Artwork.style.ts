import theme from "@/styles/theme";
import styled from "styled-components";

export const ArtworkListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 3rem 7rem 5rem 7rem;
`;

export const ArtworkFrameWrapper = styled.div`
  position: relative;
  background-color: ${theme.primary};
  margin-top: 50px;
`;

export const ArtworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${theme.secondary};
  color: ${theme.primary} !important;
  border-radius: 10px;
`;

export const ArtworkTitle = styled.h2`
  font-size: 18px;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ArtworkThumbnailWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 8px;
  cursor: pointer;
`;

export const ArtworkLikeIconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: alias;
  z-index: 10;
`;

export const ArtworkInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WriterWrapper = styled.div`
  font-size: 14px;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 10px;
  cursor: pointer;
`;

export const ArtworkTag = styled.span`
  font-size: 12px;
  margin-right: 4px;
  font-weight: 900;
`;

export const ArtworkTagWrapper = styled.div`
  width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
