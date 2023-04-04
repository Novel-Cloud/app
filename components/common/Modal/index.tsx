import { useRecoilState } from "recoil";
import useModal from "@/hooks/useModal";
import modalState from "@/context/modal";
import ModalView from "./View";

export default function Modal() {
  const [modal] = useRecoilState(modalState);
  const { closeModal } = useModal();

  return (
    <ModalView
      {...modal}
      onClose={() => {
        modal.onClose?.();
        if (!modal.menualClose) {
          closeModal();
        }
      }}
    />
  );
}
