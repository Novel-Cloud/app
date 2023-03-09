import { EditButtonArgument } from "@/types/editor.interface";
import * as S from "./ToolbarButton.style";

export default function ToolbarButtonView({
  cmd,
  arg,
  icon,
}: EditButtonArgument) {
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
