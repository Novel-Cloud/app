import { EditButtonArgument, ShortCut } from "@/types/editor.interface";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";
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
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
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
      <S.Toolbar style={{ padding: "1.25rem 0" }}>
        <S.ShortCutIconWrapper onClick={() => router.push("/editor/edit")}>
          <ShortCutIcon />
        </S.ShortCutIconWrapper>
        <S.Toolbar>
          {shortCutList.map(({ content }, idx) => (
            <ToolbarButton
              key={idx}
              onMouseDown={(event) => {
                event.preventDefault();
                document.execCommand("insertText", false, content);
              }}
            >
              {content}
            </ToolbarButton>
          ))}
        </S.Toolbar>
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}

const ToolbarButton = styled.div`
  background-color: ${theme.secondary};
  padding: 6px 12px;
  border-radius: 10px;
`;
