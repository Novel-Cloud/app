import theme from "@/styles/theme";
import styled from "styled-components";

export const ArtworkListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.75rem;
  padding: 3rem 7rem 5rem 7rem;
  @media screen and (max-width: 1024px) {
    padding: 3rem 5rem 5rem 5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 2rem 5rem 2rem;
    justify-content: center;
  }
  @media screen and (max-width: 51.25rem) {
  }
`;

export const ArtworkFrameWrapper = styled.div`
  position: relative;
  background-color: ${theme.primary};
  margin-top: 5.625rem;
`;

export const ArtworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.625rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${theme.secondary};
  color: ${theme.primary} !important;
  border-radius: 0.625rem;
`;

export const ArtworkTitle = styled.h2`
  font-size: 1.125rem;
  width: 13.75rem;
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
  width: 13.75rem;
  height: 13.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  img {
    object-fit: cover;
    border-radius: 6px;
  }
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
  font-size: 0.875rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-right: 0.625rem;
  cursor: pointer;
`;

export const ArtworkTag = styled.span`
  font-size: 0.75rem;
  margin-right: 0.25rem;
  font-weight: 900;
`;

export const ArtworkTagWrapper = styled.div`
  width: 8.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
