import theme from "@/styles/theme";
import styled from "styled-components";

export const FileUploaderWrapper = styled.div`
  position: relative;
  object-fit: cover;
  width: 900px;
  height: 500px;
  margin-top: 4rem;
  img {
    border: 2px solid ${theme.primary};
    border-radius: 10px;
    opacity: 0.3;
  }
`;

export const FileUploadButton = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: ${theme.secondary};
  color: ${theme.primary};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 14px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
