import { ReactNode } from "react";
import * as S from "./ToolbarButton.style";

interface EditButtonProps {
  cmd: string;
  arg?: string;
  icon: ReactNode;
}

export default function ToolbarButtonView({ cmd, arg, icon }: EditButtonProps) {
  return (
    <S.ToolbarButton
      key={cmd}
      onMouseDown={(event) => {
        event.preventDefault();
        document.execCommand(cmd, false, arg);
      }}
    >
      {icon}
    </S.ToolbarButton>
  );
}
