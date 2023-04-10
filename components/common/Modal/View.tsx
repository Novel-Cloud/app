import styled from "styled-components";
import { ModalState } from "@/types/modal.interface";
import XIcon from "@/components/icons/common/XIcon";

interface ModalViewProps extends ModalState {
  onClose?: () => void;
}

export default function ModalView({
  title,
  content,
  visible,
  onClose,
}: ModalViewProps) {
  return (
    <>
      <ModalBackground visible={visible} onClick={onClose} />
      <ModalWrapper visible={visible}>
        <ModalTitle>
          <h1>{title}</h1>
          <XIcon onClick={onClose} />
        </ModalTitle>

        <ModalContent>{content}</ModalContent>
      </ModalWrapper>
    </>
  );
}

const ModalBackground = styled.div<{ visible?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2;
  ${(props) => !props.visible && "display: none"};
  z-index: 5;
`;

const ModalWrapper = styled.div<{ visible?: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: white;
  ${(props) => !props.visible && "display: none"};
  border-radius: 2rem;
  z-index: 20;
  width: 75%;
  max-width: 37.5rem;
  height: 720px;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  & > h1 {
    margin: 0;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 0.625rem;
  padding: 0 40px;
  box-sizing: border-box;
`;
