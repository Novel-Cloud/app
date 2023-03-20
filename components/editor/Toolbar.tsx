import { EditButtonArgument, ShortCut } from "@/types/editor.interface";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
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
  const [isEnabled, setIsEnabled] = useState(false);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    console.log("end");
  };

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
        <S.ShortCutIconWrapper>
          <ShortCutIcon />
        </S.ShortCutIconWrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="contents" direction="horizontal">
            {(droppableProvided) => (
              <S.Toolbar
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {shortCutList.map(({ content, id }) => (
                  <ShortCutButton
                    key={id}
                    idx={id}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      document.execCommand("insertText", false, content);
                    }}
                  >
                    {content}
                  </ShortCutButton>
                ))}
              </S.Toolbar>
            )}
          </Droppable>
        </DragDropContext>
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}
