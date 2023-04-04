import { EditButtonArgument, ShortCut } from "@/types/editor.interface";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import ToolbarButtonView from "./ToolbarButton";
import * as S from "./Toolbar.style";
import ShortCutIcon from "../icons/editor/ShortCutIcon";

interface ToolbarViewProps {
  editButtonArgumentList: EditButtonArgument[];
  shortCutList: ShortCut[];
  setShortCutList: Dispatch<SetStateAction<ShortCut[]>>;
}

export default function ToolbarView({
  editButtonArgumentList,
  shortCutList,
}: ToolbarViewProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const animation = requestAnimationFrame(() => setIsEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setIsEnabled(false);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <S.ToolbarWrapper>
      <S.Toolbar>
        {editButtonArgumentList.map((editButtonArgument, idx) => (
          <ToolbarButtonView key={idx} {...editButtonArgument} />
        ))}
      </S.Toolbar>
      <S.Toolbar>
        <S.ShortCutIconWrapper
          onClick={() =>
            openModal({ title: "엄준식", content: <span>엄</span> })
          }
        >
          <ShortCutIcon />
        </S.ShortCutIconWrapper>
        <S.Toolbar>
          {shortCutList.map(({ content }, idx) => (
            <div
              key={idx}
              onMouseDown={(event) => {
                event.preventDefault();
                document.execCommand("insertText", false, content);
              }}
            >
              {content}
            </div>
          ))}
        </S.Toolbar>
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}
