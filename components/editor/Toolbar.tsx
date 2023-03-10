import { EditButtonArgument, ShortCut } from "@/types/editor.interface";
import ToolbarButtonView from "./ToolbarButton";
import * as S from "./Toolbar.style";
import ShortCutButton from "./ShortCutButton";
import ShortCutIcon from "../icons/editor/ShortCutIcon";

interface ToolbarViewProps {
  editButtonArgumentList: EditButtonArgument[];
  shortCutList: ShortCut[];
}

export default function ToolbarView({
  editButtonArgumentList,
  shortCutList,
}: ToolbarViewProps) {
  return (
    <S.ToolbarWrapper>
      <S.Toolbar>
        {editButtonArgumentList.map((editButtonArgument, idx) => (
          <ToolbarButtonView key={idx} {...editButtonArgument} />
        ))}
      </S.Toolbar>
      <S.Toolbar>
        <S.ShortCutIconWrapper>
          <ShortCutIcon />
        </S.ShortCutIconWrapper>
        <S.Toolbar style={{ marginTop: "1.25rem", paddingBottom: "1.25rem" }}>
          {shortCutList.map(({ content, id }) => (
            <ShortCutButton
              key={id}
              onMouseDown={(event) => {
                event.preventDefault();
                document.execCommand("insertText", false, content);
              }}
            >
              {content}
            </ShortCutButton>
          ))}
        </S.Toolbar>
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}
